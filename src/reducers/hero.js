import {SET_HAND} from '../actions/HeroActions';

export const initialState = {
    name: '',
    hand: null,
};

export function heroReducer(state = initialState, action) {
    switch (action.type) {
        case SET_HAND: {
            return {...state, hand: action.payload}
        }

        default:
            return state;
    }
}