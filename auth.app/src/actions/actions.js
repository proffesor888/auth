import {CREATE_USER} from '../constants/constants';

export const createUser = (input) => {
    return {
        type: CREATE_USER,
        email: input.email,
        pass: input.pa
    }
}

