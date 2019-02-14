import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Seat } from '../components/Seat';

class Seats extends Component {

    componentDidMount() {

    }

    render() {
        const { seats, hero } = this.props;

        const renderedSeats = [];
        for (const i in seats) {
            const { name, stack, bet, inGame } = seats[i];
            let isHero = false;
            let hand = null;
            if (name === hero.name) {
                isHero = true;
                hand = hero.hand || null;
            }
            renderedSeats[i] = <Seat
                key={i}
                name={name}
                stack={stack}
                inGame={inGame}
                bet={bet}
                hero={isHero}
                hand={hand}
            />
        }

        return (
            <div className="seats">
                {renderedSeats}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        seats: store.table.seats,
        hero: store.hero,
    }
};


export default connect(mapStateToProps)(Seats);