import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import  sentenceReducer from '../reducers/sentenceReducers/sentenceReducer';
import thunk from 'redux-thunk';

const initialState : any = { };

const reducer = combineReducers(
    {
        sentences: sentenceReducer
    });

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState,
    composeEnhancers(applyMiddleware(thunk)));

export default store;