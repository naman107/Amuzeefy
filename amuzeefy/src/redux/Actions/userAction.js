import { userActionTypes } from "./actionTypes";

export const userRequest = () => ({
    type: userActionTypes.USER_REQUEST
})

export const userRequestFailure = (data) => ({
    type: userActionTypes.USER_FAILURE,
    payload: data
})

export const userRequestSuccess = (data) => ({
    type: userActionTypes.USER_SUCCESS,
    payload: data
})
