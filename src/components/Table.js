import React, { Component } from 'react';
import { Board } from './Board';
import { Button } from './Button';
import { Pots } from './Pots';
import Seats from '../containers/Seats';

export default class Table extends Component {


    render() {
        const { table } = this.props;

        return (
            <div className="table">
                <div className="table-pots">

                </div>
                <Button seat={table.button}/>
                <Pots pots={table.pots}/>
                <Board board={table.board}/>
                <Seats/>

            </div>
        )
    }
}