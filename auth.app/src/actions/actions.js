import {CREATE_USER, LOGIN_USER, ADD_GOAL, COMPLETE_GOAL} from '../constants/constants';

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

export const addGoal = (input) => {
    return {
        type: ADD_GOAL,
        goal: input.value,
        key: input.key
    }
}

export const deleteGoal = (input) => {
    return {
        type: COMPLETE_GOAL,
        goal: input
    }
}

