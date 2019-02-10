import React, { Component } from 'react';

export class Card extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount() {
        const {size, rank, suit} = this.props;

        const ctx = this.canvas.current.getContext('2d');
        ctx.drawPokerCard(0, 0, size, suit, rank);

    }

    render() {
        const {size} = this.props;
        return (
            <canvas ref={this.canvas} width={size*0.75} height={size} />
        )
    }
}