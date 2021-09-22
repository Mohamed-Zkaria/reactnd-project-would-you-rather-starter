import {_getUsers, _getQuestions} from "../utils/_DATA";
import { addAnswerToUser, addQuestionToUser, receiveUsers } from "./users";
import { addQuestion, answerQuestion, receiveQuestions } from "./questions";
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

export function handleAddAnswerToUser(questionId, choosedOption, authedUser){
    return async(dispatch) => {
        dispatch(showLoading());
        dispatch(addAnswerToUser(questionId, choosedOption, authedUser))
        dispatch(hideLoading());

    }
}



export function handleAddQuestion(question){
    return async (dispatch) => {
        dispatch(showLoading());
        dispatch(addQuestion(question));
        dispatch(hideLoading());
    }
}

export function handleAddQuestionToUser(questionId, authedUser){
    return async (dispatch) =>{
        dispatch(showLoading());
        dispatch(addQuestionToUser(questionId, authedUser));
        dispatch(hideLoading());
    }
}