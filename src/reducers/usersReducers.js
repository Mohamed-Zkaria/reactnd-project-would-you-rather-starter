import { ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER, RECEIVE_USERS } from "../actions/users";

export default function usersReducer(state = {}, action){
    switch (action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        
        case ADD_ANSWER_TO_USER:
            return {
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.questionId]: action.choosedOption,
                    }
                }
            }
        case ADD_QUESTION_TO_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.questionId])
                }
            }
        default:
            return state;
            
    }
}