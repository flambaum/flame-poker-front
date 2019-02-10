import { combineReducers } from 'redux';
import { tableReducer } from './table';
import { roomReducer } from './room';
import { controlReducer } from './control';
import { heroReducer } from './hero';

export const rootReducer = combineReducers({
    table: tableReducer,
    hero: heroReducer,
    room: roomReducer,
    control: controlReducer,
});