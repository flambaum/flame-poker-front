export const SET_HAND = 'SET_HAND';
export const SET_NAME = 'SET_NAME';
export const SET_HERO_STACK = 'SET_HERO_STACK';
export const SET_HERO_BET = 'SET_HERO_BET';

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

export function setHeroStack(stack) {
    return {
        type: SET_HERO_STACK,
        payload: stack,
    }
}

export function setHeroBet(bet) {
    return {
        type: SET_HERO_BET,
        payload: bet,
    }
}