import {applyMiddleware, createStore} from 'redux';
import {UserObj} from './reducers/reducers';
import logger from 'redux-logger';

export default createStore(UserObj, applyMiddleware(logger));

