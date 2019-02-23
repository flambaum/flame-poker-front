import React, { Component } from 'react';

export class Pots extends Component {
    render() {
        const { pots } = this.props;

        const renderedPots = pots.map((pot, index) => {
            if (pot.chips) {
                return (
                    <div
                        key={index}
                        className="pot"
                    >
                        <p>{`Банк ${index+1}:`}</p>
                        <span>{pot.chips}</span>
                    </div>
                )
            } else return null;
        });

        return (
            <div className="table-pots">

                {renderedPots}
            </div>
        )
    }
}