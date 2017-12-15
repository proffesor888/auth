import {CREATE_USER,LOGIN_USER} from '../constants/constants';


/*export const UsersMas = (state=[], action) => {
    switch (action.type) {
        case CREATE_USER:
        return (
            [...state, UserObj({}, action)]
        )
        break;
        default:
        return state;
    }
}; */

export const UserObj = (state={}, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                login: action.email,
                password: action.pass
            }
            break;
        case LOGIN_USER:
        return {
            login: action.email,
            password: action.pass
        }
        break;
        default:
            return state;
    }
}