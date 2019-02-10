import { SET_BUTTON, SET_NEW_SEATS, SET_BOARD, SET_POTS, SET_TABLE_BET, SET_HAND } from '../actions/TableActions';

export const initialState = {
    seats: [],
    pots: [],
    board: [],
    button: null,
    tableBet: 0,
    hand: null,
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

        case SET_HAND: {
            return {...state, hand: action.payload}
        }

        default:
            return state;
    }
}