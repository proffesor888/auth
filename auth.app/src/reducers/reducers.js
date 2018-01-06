import {CREATE_USER,LOGIN_USER, ADD_GOAL, COMPLETE_GOAL, FINISHED_GOAL} from '../constants/constants';


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
        let {goal} = action;
        return goal;
        break;
        case COMPLETE_GOAL:
        return (
            state.filter((goal) => goal.key!==action.goal)
        )
        break;
        default:
        return state
    } 
}

export const FinishedList = (state = [], action) => {
    switch (action.type) {
        case FINISHED_GOAL:
            let {goal} = action;
            return goal;
            break;
        default:
            return state;
    }
}

/*const UserGoal = (state = {}, action) => {
    switch (action.type) {
        case ADD_GOAL:
        return {
            goal: action.goal,
            key: action.key
        }
        break;
        default:
        return state;
    }
} */