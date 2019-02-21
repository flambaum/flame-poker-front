import React, { Component } from 'react';
import { connect } from 'react-redux';
import socket from '../socket';

class ControlPanel extends Component {
    state = {
        betValue: 0,
        betChanged: false,
    };

    static getDerivedStateFromProps(props, state) {
        const { bigBlind, tableBet, actions, visible} = props;

        if (!visible && state.betChanged) return { betChanged: false };

        if (visible && !state.betChanged) {
            return { betValue: actions.bet ? bigBlind : tableBet + bigBlind };
        }
        return null;
    }

    onFold = (e) => {
        socket.emit(`action`, { word: `fold` });
    };

    onCheck = (e) => {
        socket.emit(`action`, { word: `check` });
    };

    onCall = (e) => {
        socket.emit(`action`, { word: `call` });
    };

    onBet = (e) => {
        const { betValue } = this.state;
        socket.emit(`action`, { word: `bet`, bet: betValue });
    };

    onRaise = (e) => {
        const { betValue } = this.state;
        const { heroBet } = this.props;
        socket.emit(`action`, { word: `bet`, bet: betValue - heroBet });
    };

    handleBetInputChange = (e) => {
        this.setState({ betValue: e.currentTarget.value, betChanged: true })
    };

    actionHandler = (e) => {
        const { setVisible } = this.props;
        if (e.target.classList.contains('action_button')) {
            setVisible(false);
        }
    };

    render() {
        let { betValue } = this.state;
        const { visible, bigBlind, tableBet, heroBet, stack } = this.props;
        const {fold, check, call, bet, raise} = this.props.actions;

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
                        min={tableBet + bigBlind}
                        max={raise ? stack + heroBet : stack}
                        step={1}
                        value={betValue}
                        onChange={this.handleBetInputChange}
                    />
                </div>
                <div onClick={this.actionHandler}>
                    {fold && <button className="action_button" onClick={this.onFold}>FOLD</button>}
                    {check && <button className="action_button" onClick={this.onCheck}>CHECK</button>}
                    {call && <button className="action_button" onClick={this.onCall}>{`CALL ${tableBet - heroBet}`}</button>}
                    {bet && <button className="action_button" onClick={this.onBet}>{`BET ${betValue}`}</button>}
                    {raise && <button className="action_button" onClick={this.onRaise}>{`RAISE TO ${betValue}`}</button>}
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

const mapStateToProps = store => {
    return {
        heroBet: store.hero.bet,
        stack: store.hero.stack,
    }
};

export default connect(mapStateToProps)(ControlPanel);

