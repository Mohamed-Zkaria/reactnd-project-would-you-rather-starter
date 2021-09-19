export const RECEIVE_Questions = "RECEIVE_Questions";

export function receiveQuestions(questions){
    return {
        type: RECEIVE_Questions,
        questions
    }
}