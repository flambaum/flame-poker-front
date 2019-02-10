import React, { Component } from 'react';
import { SERVER_URL } from '../config';

export class Seat extends Component {
    render() {
        const { name, stack } = this.props;

        return (
            <div className="seat">
                <img src={`${SERVER_URL}/img/default-avatar.png`} alt="avatar" className="seat-avatar"/>
                <p className="seat-user_name">{name}</p>
                <p className="seat-stack">${stack}</p>
            </div>
        )
    }
}