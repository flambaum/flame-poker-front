import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import socket from './socket';
import { Header } from './components/Header';
import Table from './components/Table';
import ControlPanel from './components/ControlPanel';
import {
    setButton,
    setNewSeats,
    setBoard,
    setPots,
    setTableBet,
    setTableRaise,
    setBigBlind,
    setHands,
    setSeat,
    setActindPlayer,
    setWinners,
} from './actions/TableActions';
import { setHand, setName, setHeroBet, setHeroStack } from './actions/HeroActions';
import { setVisible, setAvailableActions } from './actions/ControlActions';

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
            const {
                setButton,
                setNewSeats,
                setBoard,
                setPots,
                setTableBet,
                setBigBlind,
            } = this.props;

            setButton(data.button);
            setNewSeats(data.seats);
            setBoard(data.board);
            setPots(data.pots);
            setTableBet(data.bet);
            setBigBlind(data.bigBlind);
        };

        socket.on('connect', () => {
            socket.emit('get-info', {type: 'room-info'}, (data) => {
                if (!data) return;
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

            const { setHands, setWinners } = this.props;
            setHands({});
            setWinners([]);
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
            const {
                setVisible,
                setTableBet,
                setAvailableActions,
                setHeroStack,
                setHeroBet,
                setActingPlayer,
                setTableRaise,
            } = this.props;

            const { actions, tableBet, stack, bet, seatNum, tableRaise } = data;
            setVisible(true);
            setAvailableActions(actions);
            setHeroStack(stack);
            setHeroBet(bet);
            setTableBet(tableBet);
            setTableRaise(tableRaise);
            setActingPlayer(seatNum);
            console.log('expected-action', data);
        });

        socket.on('round-end', (data) => {
            const { setHands, setWinners } = this.props;
            setHands(data.hands);
            setWinners(data.winners);
            console.log('round-end', data);
        });

        socket.on('all-in', (data) => {
            const { setHands } = this.props;
            setHands(data);
            console.log('all-in', data);
        });

        socket.on(`waiting-player-move`, (data) => {
            const { setActingPlayer } = this.props;
            setActingPlayer(data.seat);
            console.log(`waiting-player-move`, data);
        });

        socket.on(`action-completed`, (data) => {
            const { setHeroStack, setHeroBet, setVisible, setSeat, setActingPlayer } = this.props;
            setVisible(false);
            setHeroStack(data.stack);
            setHeroBet(data.bet);
            setSeat(data);
            setActingPlayer(null);

            console.log(`action-completed`, data);
        });

        socket.on(`player-acted`, (data) => {
            const { setSeat, setActingPlayer } = this.props;
            setSeat(data);
            setActingPlayer(null);
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
                        tableRaise={table.tableRaise}
                        bigBlind={table.bigBlind}
                        visible={control.visible}
                        actions={control.availableActions}
                        setVisible={setVisible}
                    />
                </main>

            </div>
        );
    }
}

const mapStateToProps = store => {
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
        setTableRaise: (raise) => dispatch(setTableRaise(raise)),
        setHand: (hand) => dispatch(setHand(hand)),
        setHeroName: (name) => dispatch(setName(name)),
        setVisible: (visible) => dispatch(setVisible(visible)),
        setAvailableActions: (actions) => dispatch(setAvailableActions(actions)),
        setBigBlind: (bb) => dispatch(setBigBlind(bb)),
        setHeroStack: (stack) => dispatch(setHeroStack(stack)),
        setHeroBet: (bet) => dispatch(setHeroBet(bet)),
        setHands: (hands) => dispatch(setHands(hands)),
        setSeat: (seat) => dispatch(setSeat(seat)),
        setActingPlayer: (seat) => dispatch(setActindPlayer(seat)),
        setWinners: (winners) => dispatch(setWinners(winners)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
