import {CREATE_USER} from '../constants/constants';
import {createUserAction} from '../actions/actions';

export const UsersMas = (state=[], action) => {
    switch (action.type) {
        case CREATE_USER:
        return (
            [...state, UserObj({}, action)]
        )
        break;
        default:
        return state;
    }
};

export const UserObj = (state={}, action) => {
    switch (action.type) {
        case CREATE_USER:
        return {
            login: action.login,
            password: action.password
        }
        break;
        default:
        return state;
    }
}