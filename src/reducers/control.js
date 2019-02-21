import { SET_VISIBLE, SET_AVAILABLE_ACTIONS } from '../actions/ControlActions';

export const initialState = {
    visible: false,
    availableActions: {},
};

export function controlReducer(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBLE: {
            return {...state, visible: action.payload}
        }

        case SET_AVAILABLE_ACTIONS: {
            return {...state, availableActions: action.payload}
        }

        default:
            return state;
    }
}