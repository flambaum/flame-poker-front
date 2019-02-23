import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Seat } from '../components/Seat';

class Seats extends Component {

    componentDidMount() {

    }

    render() {
        const { seats, hero, hands, button } = this.props;

        const numSeats = Object.keys(seats).length;
        const renderedSeats = [];
        for (const i in seats) {
            const { name, stack, bet, inGame } = seats[i];
            let isHero = false;
            let hand = hands[i];
            if (name === hero.name) {
                isHero = true;
                hand = hero.hand || null;
            }

            renderedSeats[i] = <Seat
                key={i}
                seatID={+i}
                name={name}
                stack={stack}
                inGame={inGame}
                bet={bet}
                hero={isHero}
                hand={hand}
                numSeats={numSeats}
                button={button == i}
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
        hands: store.table.hands,
        hero: store.hero,
        button: store.table.button,
    }
};


export default connect(mapStateToProps)(Seats);