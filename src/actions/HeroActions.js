export const SET_HAND = 'SET_HAND';
export const SET_NAME = 'SET_NAME';

export function setHand(hand) {
    return {
        type: SET_HAND,
        payload: hand,
    }
}

export function setName(name) {
    return {
        type: SET_NAME,
        payload: name,
    }
}