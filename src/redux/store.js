import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import marbelReducer from './marvelDucks';

const rootReducer = combineReducers({
    movies: marbelReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // para configurar la extencion de google

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk)));
    return store;
}


