import React, { Component } from 'react';
import { Card } from './Card';
import { SERVER_URL } from '../config';

export class Seat extends Component {
    render() {
        const { name, stack, bet, hand, inGame } = this.props;

        let handCards = null;
        if (inGame) {
            if (hand) {
                handCards = hand.map((card, index) => {
                    return (
                        <Card key={index}
                              size={40}
                              suit={card[1]}
                              rank={card[0] === `T` ? `10` : card[0]}
                        />
                    )
                });
            } else {
                handCards = [
                    <Card
                        key="1"
                        size={40}
                        back={true}
                    />,
                    <Card
                        key="2"
                        size={40}
                        back={true}
                    />
                ]
            }
        }

        return (
            <div className="seat">
                <img src={`${SERVER_URL}/img/default-avatar.png`} alt="avatar" className="seat-avatar"/>
                <p className="seat-user_name">{name}</p>
                <p className="seat-stack">${stack}</p>
                {bet ? <p className="seat-bet">{bet}</p> : null}
                <div className="seat-hand" >
                    {handCards}
                </div>

            </div>
        )
    }
}