import React, { Component } from 'react';

export class Pots extends Component {
    render() {
        const { pots } = this.props;

        const renderedPots = pots.map((pot, index) => {
            return (
                <div
                    key={index}
                    className="pot"
                >
                    {pot.chips}
                </div>
            )
        });

        return (
            <div className="table-pots">
                {renderedPots}
            </div>
        )
    }
}