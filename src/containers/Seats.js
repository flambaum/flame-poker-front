import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Seat } from '../components/Seat';

class Seats extends Component {

    componentDidMount() {

    }

    render() {
        const { seats } = this.props;

        const renderedSeats = [];
        for (const i in seats) {
            const { name, stack, bet,  } = seats[i];
            renderedSeats[i] = <Seat
                key={i}
                name={name}
                stack={stack}
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