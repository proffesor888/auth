import {CREATE_USER, GET_EMAIL} from '../constants/constants';


export const UsersMas = (state=[], action) => {
    switch (action.type) {
        case CREATE_USER:
        return (
            [...state, UserObj({}, action)]
        )
        break;
        case GET_EMAIL:
        return (
            action.email
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
                login: action.email,
                password: action.pass
            }
            break;
        default:
            return state;
    }
}