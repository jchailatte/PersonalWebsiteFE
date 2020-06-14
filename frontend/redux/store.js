import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';


//https://github.com/vercel/next.js/blob/canary/examples/with-redux/store.js

let store;

const initialState = {
    open: true
};

function initStore(preloadedState = initialState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())   
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    if(preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });

        store = undefined;
    }

    if(typeof window === 'undefined') return _store

    if(!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}