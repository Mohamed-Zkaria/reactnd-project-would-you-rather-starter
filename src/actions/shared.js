import {_getUsers, _getQuestions} from "../utils/_DATA";
import { receiveUsers } from "./users";
import { answerQuestion, receiveQuestions } from "./questions";
import { showLoading, hideLoading } from 'react-redux-loading';
import { setAuthedUser, unsetAuthedUser } from "./authedUser";

export function handleDataRetrieval(){
    return async (dispatch) => {
        dispatch(showLoading())
        const questions = await _getQuestions();
        const users = await _getUsers();
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading())
    }

}



export function handleLogin(userName){
    return async (dispatch)=>{
        dispatch(showLoading());
        dispatch(setAuthedUser(userName));
        dispatch(hideLoading());
    }
}


export function handleLogout(){
    return async (dispatch) => {
        dispatch(showLoading());
        dispatch(unsetAuthedUser());
        dispatch(hideLoading());
    }
}

export function handleaAnswerQuestion(authedUser, questionId, choosedOption){
    return async(dispatch)=>{
        dispatch(showLoading());
        dispatch(answerQuestion(authedUser, questionId, choosedOption));
        dispatch(hideLoading());
    }
}