export const SET_HAND = 'SET_HAND';

export function setHand(hand) {
    return {
        type: SET_HAND,
        payload: hand,
    }
}