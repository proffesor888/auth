import {applyMiddleware, createStore, combineReducers} from 'redux';
import {UserObj, UserGoalList} from './reducers/reducers';
import logger from 'redux-logger';

const reducer = combineReducers({UserObj, UserGoalList});
export default createStore(reducer, applyMiddleware(logger));

