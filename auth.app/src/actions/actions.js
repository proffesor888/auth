import {CREATE_USER, LOGIN_USER} from '../constants/constants';

export const createUser = (input) => {
    return {
        type: CREATE_USER,
        email: input.email,
        pass: input.password
    }
}

export const logUser = (input) => {
    return {
        type: LOGIN_USER,
        email: input.email,
        pass: input.pa
    }
}

