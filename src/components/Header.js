import React, { Component } from 'react'
import { SERVER_URL } from '../config';

export class Header extends Component {
    render() {
        const { roomID, numSeats, buyIn, startTime } = this.props;
        return (
            <header className="App-header">
                <div className="header-info">
                    <p className="title-room">
                        Турнир: {roomID}<br/>
                        Начало: {new Date(startTime).toLocaleString()}<br/>
                        Мест: {numSeats}<br/>
                        Вход: ${buyIn}
                    </p>
                </div>
                <div className="logo_container">
                    <img src={`${SERVER_URL}/img/logo.png`} className="logo" width="150" alt="logo"/>
                    <h1 className="App-title">Flame Poker</h1>
                </div>
                <div className="header-info">
                    <p>Blinds:20/40</p>
                    <p>Ante:0</p>
                    <p>
                        Next level:
                        30/60 10 min
                    </p>
                </div>
            </header>
        )
    }
}