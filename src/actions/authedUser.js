export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser(authenticatedUserId){
    return {
        type: SET_AUTHED_USER,
        authenticatedUserId
    }
}

