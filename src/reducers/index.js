import { combineReducers } from "redux";

import authedUserReducer from "./authedUserReducer";
import questionsReducer from "./questionsReducers";
import usersReducer from "./usersReducers";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    questions: questionsReducer,
    users: usersReducer,
    authedUser: authedUserReducer,
    loadingBar: loadingBarReducer
});