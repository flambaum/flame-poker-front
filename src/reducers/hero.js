import {SET_HAND, SET_NAME} from '../actions/HeroActions';

export const initialState = {
    name: '',
    hand: null,
};

export function heroReducer(state = initialState, action) {
    switch (action.type) {
        case SET_HAND: {
            return {...state, hand: action.payload}
        }

        case SET_NAME: {
            return {...state, name: action.payload}
        }

        default:
            return state;
    }
}