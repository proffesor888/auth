import {applyMiddleware, createStore} from 'redux';
import {UsersMas} from './reducers/reducers';
import logger from 'redux-logger';

export default createStore(UsersMas, applyMiddleware(logger));

