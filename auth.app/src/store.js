import {applyMiddleware, createStore, combineReducers} from 'redux';
import {UserObj, UserGoalList, FinishedList} from './reducers/reducers';
import logger from 'redux-logger';

const reducer = combineReducers({UserObj, UserGoalList, FinishedList});
export default createStore(reducer, applyMiddleware(logger));

