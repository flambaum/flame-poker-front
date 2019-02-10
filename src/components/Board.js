import React, { Component } from 'react';
import { Card } from './Card';

export class Board extends Component {
    render() {
        const { board } = this.props;

        const boardCards = board.map((card, index) => {
            return (
                <Card key={index}
                      size={100}
                      suit={card[1]}
                      rank={card[0] === `T` ? `10` : card[0]}
                />
            )
        });

        return (

            <div className="table-board">
                {boardCards}
            </div>
        )
    }
}