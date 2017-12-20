import {CREATE_USER,LOGIN_USER, ADD_GOAL, DELETE_GOAL} from '../constants/constants';


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

export const UserGoalList = (state = [], action) => {
    switch (action.type) {
        case ADD_GOAL:
        return (
            [...state,UserGoal({}, action)]
        )
        break;
        case DELETE_GOAL:
        return (
            state.filter((goal) => goal.goal!==action.goal)
        )
        break;
        default:
        return state
    } 
}

const UserGoal = (state = {}, action) => {
    switch (action.type) {
        case ADD_GOAL:
        return {
            goal: action.goal
        }
        break;
        default:
        return state;
    }
}