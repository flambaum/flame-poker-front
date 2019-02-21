import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'

export const store = createStore(rootReducer, applyMiddleware((arg) => {
    return next => action => {
        console.log('action', action, arg);
        next(action)
    }
}));