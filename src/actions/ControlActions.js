export const SET_VISIBLE = 'SET_VISIBLE';
export const SET_AVAILABLE_ACTIONS = 'SET_AVAILABLE_ACTIONS';

export function setVisible(visible) {
    return {
        type: SET_VISIBLE,
        payload: visible,
    }
}

export function setAvailableActions(actions) {
    return {
        type: SET_AVAILABLE_ACTIONS,
        payload: actions,
    }
}