import {SET_HAND, SET_NAME, SET_HERO_STACK, SET_HERO_BET} from '../actions/HeroActions';

export const initialState = {
    name: '',
    hand: null,
    stack: 0,
    bet: 0,
};

export function heroReducer(state = initialState, action) {
    switch (action.type) {
        case SET_HAND: {
            return {...state, hand: action.payload}
        }

        case SET_NAME: {
            return {...state, name: action.payload}
        }

        case SET_HERO_STACK: {
            return {...state, stack: action.payload}
        }

        case SET_HERO_BET: {
            return {...state, bet: action.payload}
        }

        default:
            return state;
    }
}