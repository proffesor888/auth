import {CREATE_USER} from '../constants/constants';

export const createUserAction = (input) => {
    return {
        type: CREATE_USER,
        name: input.name,
        lastName: input.lastName,
        email: input.email,
        password: input.password,
    }
}