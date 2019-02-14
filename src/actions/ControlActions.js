export const SET_VISIBLE = 'SET_VISIBLE';

export function setVisible(visible) {
    return {
        type: SET_VISIBLE,
        payload: visible,
    }
}