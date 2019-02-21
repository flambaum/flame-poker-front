import {
    SET_BUTTON,
    SET_NEW_SEATS,
    SET_BOARD,
    SET_POTS,
    SET_TABLE_BET,
    SET_BIG_BLIND,
    SET_HANDS,
    SET_SEAT,
} from '../actions/TableActions';

export const initialState = {
    seats: {},
    hands: {},
    pots: [],
    board: [],
    button: null,
    tableBet: 0,
    bigBlind: null,
};

export function tableReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BUTTON: {
            return {...state, button: action.payload}
        }

        case SET_NEW_SEATS: {
            return {...state, seats: action.payload}
        }

        case SET_BOARD: {
            return {...state, board: action.payload}
        }

        case SET_POTS: {
            return {...state, pots: action.payload}
        }

        case SET_TABLE_BET: {
            return {...state, tableBet: action.payload}
        }

        case SET_BIG_BLIND: {
            return {...state, bigBlind: action.payload}
        }

        case SET_HANDS: {
            return {...state, hands: action.payload}
        }

        case SET_SEAT: {
            const newSeats = {...state.seats};
            const data = action.payload;
            const seatID = data.player.seat;
            newSeats[seatID] = {
                ...newSeats[seatID],
                stack: data.stack,
                bet: data.bet,
                inGame: data.inGame
            };

            return {...state, seats: newSeats}
        }

        default:
            return state;
    }
}