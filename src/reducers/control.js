import { SET_VISIBLE } from '../actions/ControlActions';

export const initialState = {
    visible: false,
};

export function controlReducer(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBLE: {
            return {...state, visible: action.payload}
        }

        default:
            return state;
    }
}