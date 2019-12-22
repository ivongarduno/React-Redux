import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//importamos nuestro reducer
import resultsReducer from './reducers/resultsReducer';


const mainReducer = combineReducers({ results: resultsReducer});


export default createStore(
    mainReducer,
    applyMiddleware(thunk)
);
