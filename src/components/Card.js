import React, { Component } from 'react';

export class Card extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    drowCard = () => {
        const {size, rank, suit, back} = this.props;

        const ctx = this.canvas.current.getContext('2d');
        if (back){
            ctx.drawPokerBack(0, 0, size, '#0E5989','#041D2D');
        } else {
            ctx.drawPokerCard(0, 0, size, suit, rank);
        }
    };

    componentDidMount() {
        this.drowCard();
    }

    componentDidUpdate() {
        this.drowCard();
    }



    render() {
        const {size} = this.props;
        return (
            <canvas ref={this.canvas} width={size*0.75} height={size} />
        )
    }
}