import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import socket from './socket';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { ControlPanel } from './components/ControlPanel';
import { setButton, setNewSeats, setBoard, setPots, setTableBet, setHand } from './actions/TableActions';

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
                const { buyIn, numSeats, runStack, structure, startTime } = data.options;
                this.setState({
                    buyIn: buyIn,
                    numSeats: numSeats,
                    runStack: runStack,
                    structure: structure,
                    startTime: startTime,
                    heroName: data.hero.name,
                })
            });
        });

        socket.on('tournament-start', (data) => {
            updateData(data);
        });

        socket.on('new-round', (data) => {
            updateData(data);
        });

        socket.on('new-street', (data) => {
            updateData(data);
        });

        socket.on('deal-cards', (data) => {
            const { setHand } = this.props;
            setHand(data.hand);
        });

        socket.on('err', (data) => {
            console.log(data);
        });
    }



    componentDidMount() {
        this.setupSocket();
    }

    render() {
        const { room, table } = this.props;
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
                    <ControlPanel tableBet={table.tableBet}/>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
