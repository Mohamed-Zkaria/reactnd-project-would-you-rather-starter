import {_getUsers, _getQuestions} from "../utils/_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from 'react-redux-loading';

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