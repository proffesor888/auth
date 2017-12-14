import {CREATE_USER,GET_EMAIL} from '../constants/constants';

export const createUser = (input) => {
    return {
        type: CREATE_USER,
        email: input.email,
        pass: input.pa
    }
}

export const getEmail = (input) => {
    return {
        type: GET_EMAIL,
        email: input
    }
}
