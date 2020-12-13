import { userDetailActionTypes } from "./actionTypes";

export const setUserDetails = (data) => ({
    type: userDetailActionTypes.SET_USER,
    payload: data
})