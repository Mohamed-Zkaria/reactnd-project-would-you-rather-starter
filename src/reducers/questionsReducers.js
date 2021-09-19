import { RECEIVE_Questions } from "../actions/questions";

export default function questionsReducer(state = {}, action){
    switch(action.type){
        case RECEIVE_Questions:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state;
    }
}