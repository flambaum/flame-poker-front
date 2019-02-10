import React, { Component } from 'react';
import socket from '../socket';

export class ControlPanel extends Component {
    state = {
        betValue: 0,
    };

    onFold = (e) => {
        socket.emit(`action`, {word: `fold`});
    };

    onCheck = (e) => {
        socket.emit(`action`, {word: `chack`});
    };

    onCall = (e) => {
        socket.emit(`action`, {word: `call`});
    };

    onBet = (e) => {
        socket.emit(`action`, {word: `bet`, bet: this.state.betValue});
    };

    onRaise = (e) => {
        socket.emit(`action`, {word: `bet`, bet: this.state.betValue});
    };

    handleBetInputChange = (e) => {
        this.setState({ betValue: e.currentTarget.value })
    };

    render() {
        const { betValue } = this.state;

        return (
            <div className="control_panel">
                <div>
                    <input
                        type="text"
                        onChange={this.handleBetInputChange}
                        value={betValue}
                    />
                    <input
                        type="range"
                        className="bet_range"
                        min={0}
                        max={10000}
                        step={50}
                        value={betValue}
                        onChange={this.handleBetInputChange}
                    />
                </div>
                <div>
                    <button onClick={this.onFold}>FOLD</button>
                    <button onClick={this.onCheck}>CHECK</button>
                    <button onClick={this.onCall}>CALL</button>
                    <button onClick={this.onBet}>{`BET ${betValue}`}</button>
                    <button onClick={this.onRaise}>{`RAISE ${betValue}`}</button>
                </div>
            </div>
        )
    }
}