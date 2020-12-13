import { loginActionTypes } from "./actionTypes";

export const loginRequest = () => ({
    type: loginActionTypes.LOGIN_REQUEST
})

export const loginRequestFailure = (data) => ({
    type: loginActionTypes.LOGIN_FAILURE,
    payload: data
})

export const loginRequestSuccess = (data) => ({
    type: loginActionTypes.LOGIN_SUCCESS,
    payload: data
})

