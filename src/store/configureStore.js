import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'

export const store = createStore(rootReducer, applyMiddleware((arg) => {
    console.log(arg);
    return next => action => next(action)
}));