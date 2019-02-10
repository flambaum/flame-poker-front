export const SET_BUTTON = 'SET_BUTTON';
export const SET_NEW_SEATS = 'SET_NEW_SEATS';
export const SET_BOARD = 'SET_BOARD';
export const SET_POTS = 'SET_POTS';
export const SET_TABLE_BET = 'SET_TABLE_BET';
export const SET_HAND = 'SET_HAND';

export function setButton(seat) {
    return {
        type: SET_BUTTON,
        payload: seat,
    }
}

export function setNewSeats(seats) {
    return {
        type: SET_NEW_SEATS,
        payload: seats,
    }
}

export function setBoard(board) {
    return {
        type: SET_BOARD,
        payload: board,
    }
}

export function setPots(pots) {
    return {
        type: SET_POTS,
        payload: pots,
    }
}

export function setTableBet(bet) {
    return {
        type: SET_TABLE_BET,
        payload: bet,
    }
}

export function setHand(hand) {
    return {
        type: SET_HAND,
        payload: hand,
    }
}
