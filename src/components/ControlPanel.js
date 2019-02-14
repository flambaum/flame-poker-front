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
        socket.emit(`action`, {word: `check`});
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

    actionHandler = (e) => {
        const { setVisible } = this.props;
        if (e.target.classList.contains('action_button')) {
            setVisible(false);
        }
    };

    render() {
        const { betValue } = this.state;
        const { visible } = this.props;

        let content;
        if (visible) {
            content = <div>
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
                <div onClick={this.actionHandler}>
                    <button className="action_button" onClick={this.onFold}>FOLD</button>
                    <button className="action_button" onClick={this.onCheck}>CHECK</button>
                    <button className="action_button" onClick={this.onCall}>CALL</button>
                    <button className="action_button" onClick={this.onBet}>{`BET ${betValue}`}</button>
                    <button className="action_button" onClick={this.onRaise}>{`RAISE ${betValue}`}</button>
                </div>
            </div>
        } else {
            content = <div>

            </div>
        }

        return (
            <div className="control_panel">
                {content}
            </div>
        )
    }
}