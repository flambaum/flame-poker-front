export const SET_BUTTON = 'SET_BUTTON';
export const SET_NEW_SEATS = 'SET_NEW_SEATS';
export const SET_BOARD = 'SET_BOARD';
export const SET_POTS = 'SET_POTS';
export const SET_TABLE_BET = 'SET_TABLE_BET';
export const SET_TABLE_RAISE = 'SET_TABLE_RAISE';
export const SET_BIG_BLIND = 'SET_BIG_BLIND';
export const SET_HANDS = 'SET_HANDS';
export const SET_SEAT = 'SET_SEAT';
export const SET_ACTING_PLAYER = 'SET_ACTING_PLAYER';
export const SET_WINNERS = 'SET_WINNERS';

export function setButton(seat) {
    return {
        type: SET_BUTTON,
        payload: seat,
    }
}

export function setBigBlind(bb) {
    return {
        type: SET_BIG_BLIND,
        payload: bb,
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

export function setTableRaise(raise) {
    return {
        type: SET_TABLE_RAISE,
        payload: raise,
    }
}

export function setHands(hands) {
    return {
        type: SET_HANDS,
        payload: hands,
    }
}

export function setSeat(seat) {
    return {
        type: SET_SEAT,
        payload: seat,
    }
}

export function setActindPlayer(seat) {
    return {
        type: SET_ACTING_PLAYER,
        payload: seat,
    }
}

export function setWinners(winners) {
    return {
        type: SET_WINNERS,
        payload: winners,
    }
}