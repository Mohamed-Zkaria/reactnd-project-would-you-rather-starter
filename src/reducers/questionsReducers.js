import { ANSWER_QUESTION, RECEIVE_Questions } from "../actions/questions";

export default function questionsReducer(state = {}, action){
    switch(action.type){
        case RECEIVE_Questions:
            return {
                ...state,
                ...action.questions
            }
        
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.choosedOption]: {
                        ...state[action.questionId][action.choosedOption],
                        votes: state[action.questionId][action.choosedOption].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state;
    }
}