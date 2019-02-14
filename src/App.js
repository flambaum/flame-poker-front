import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import socket from './socket';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { ControlPanel } from './components/ControlPanel';
import { setButton, setNewSeats, setBoard, setPots, setTableBet } from './actions/TableActions';
import { setHand, setName } from './actions/HeroActions';
import { setVisible } from './actions/ControlActions';

class App extends Component {
    state = {
        roomID: window.location.pathname.split(`/`)[2],
        structure: null,
        buyIn: null,
        numSeats: null,
        startTime: null,
        runStack: null,
        heroName: null,
    };

    setupSocket() {
        const updateData = (data) => {
            const { setButton, setNewSeats, setBoard, setPots, setTableBet } = this.props;

            setButton(data.button);
            setNewSeats(data.seats);
            setBoard(data.board);
            setPots(data.pots);
            setTableBet(data.bet);
        };

        socket.on('connect', () => {
            socket.emit('get-info', {type: 'room-info'}, (data) => {
                console.log(data);
                const { setHeroName } = this.props;
                const { buyIn, numSeats, runStack, structure, startTime } = data.options;
                this.setState({
                    buyIn: buyIn,
                    numSeats: numSeats,
                    runStack: runStack,
                    structure: structure,
                    startTime: startTime,
                    heroName: data.hero.name,
                });
                setHeroName(data.hero.name);
            });
        });

        socket.on('tournament-start', (data) => {
            updateData(data);
        });

        socket.on('new-round', (data) => {
            console.log('new-round');
            updateData(data);
        });

        socket.on('new-street', (data) => {
            updateData(data);
        });

        socket.on('deal-cards', (data) => {
            console.log('deal-cards');
            const { setHand } = this.props;
            setHand(data.hand);
        });

        socket.on('expected-action', (data) => {
            const { setVisible } = this.props;
            setVisible(true);
            console.log('expected-action', data);
        });

        socket.on('round-end', (data) => {

            console.log('round-end', data);
        });

        socket.on('all-in', (data) => {

            console.log('all-in', data);
        });

        socket.on(`waiting-player-move`, (data) => {

            console.log(`waiting-player-move`, data);
        });

        socket.on(`action-completed`, (data) => {

            console.log(`action-completed`, data);
        });

        socket.on(`player-acted`, (data) => {

            console.log(`player-acted`, data);
        });

        socket.on('err', (data) => {
            console.log(data);
        });
    }



    componentDidMount() {
        this.setupSocket();
    }

    render() {
        const { room, table, control } = this.props;
        const { setVisible } = this.props;
        const { roomID, numSeats, buyIn, startTime } = this.state;
        return (
            <div className="App">
                <Header
                    room={room}
                    roomID={roomID}
                    numSeats={numSeats}
                    buyIn={buyIn}
                    startTime={startTime}
                />

                <main className="App-main">
                    <Table table={table} />
                    <ControlPanel
                        tableBet={table.tableBet}
                        visible={control.visible}
                        setVisible={setVisible}
                    />
                </main>

            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store);
    return {
        room: store.room,
        table: store.table,
        control: store.control,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setButton: (seat) => dispatch(setButton(seat)),
        setNewSeats: (seats) =>dispatch(setNewSeats(seats)),
        setBoard: (board) => dispatch(setBoard(board)),
        setPots: (pots) => dispatch(setPots(pots)),
        setTableBet: (bet) => dispatch(setTableBet(bet)),
        setHand: (hand) => dispatch(setHand(hand)),
        setHeroName: (name) => dispatch(setName(name)),
        setVisible: (visible) => dispatch(setVisible(visible)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
