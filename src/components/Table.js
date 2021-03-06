import React, { Component } from 'react';
import { Board } from './Board';
import { Pots } from './Pots';
import Seats from '../containers/Seats';

export default class Table extends Component {


    render() {
        const { table } = this.props;

        return (
            <div className="table">
                <Pots pots={table.pots}/>
                <Board board={table.board}/>
                <Seats/>
            </div>
        )
    }
}