import React, { Component } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { SERVER_URL } from '../config';

export class Seat extends Component {
    render() {
        const { seatID, name, stack, bet, hand, inGame, numSeats, button } = this.props;

        let handCards = null;
        if (inGame) {
            if (hand) {
                handCards = hand.map((card, index) => {
                    return (
                        <Card key={index}
                              size={50}
                              suit={card[1]}
                              rank={card[0] === `T` ? `10` : card[0]}
                        />
                    )
                });
            } else {
                handCards = [
                    <Card
                        key="1"
                        size={50}
                        back={true}
                    />,
                    <Card
                        key="2"
                        size={50}
                        back={true}
                    />
                ]
            }
        }

        let numSeatMax = 9;
        if (numSeats <= 2) numSeatMax = 2;
        else if (numSeats === 3) numSeatMax = 3;
        else if (numSeats === 4) numSeatMax = 4;
        else if (numSeats === 5) numSeatMax = 5;
        else if (numSeats === 6) numSeatMax = 6;

        const positionClass = `seat-${seatID+1}-${numSeatMax} ${seatID+1  > numSeatMax/2 ? 'seat-left' : 'seat-right'}`;

        return (
            <div className={`seat ${positionClass}`}>
                <img src={`${SERVER_URL}/img/default-avatar.png`} alt="avatar" className="seat-avatar"/>
                <p className="seat-user_name">{name}</p>
                <p className="seat-stack">${stack}</p>
                <div className="seat-hand" >
                    {handCards}
                </div>
                <div className="seat-table_info">
                    {button && <Button/>}
                    {bet ? <p className="seat-bet">${bet}</p> : null}
                </div>
            </div>
        )
    }
}