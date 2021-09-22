export const RECEIVE_Questions = "RECEIVE_Questions";
export const ANSWER_QUESTION = "ANSWER_QUESTION";


export function receiveQuestions(questions){
    return {
        type: RECEIVE_Questions,
        questions
    }
}


export function answerQuestion(authedUser, questionId, choosedOption){
    return {
        type: ANSWER_QUESTION,
        authedUser,
        questionId,
        choosedOption
    }
}