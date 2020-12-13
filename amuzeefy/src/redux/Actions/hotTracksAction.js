import { hotTracksActions } from "./actionTypes";

export const hotTracksRequest = () => ({
    type: hotTracksActions.HOT_TRACK_REQUEST
})

export const hotTracksSuccess = (data) => ({
    type: hotTracksActions.HOT_TRACK_SUCCESS,
    payload: data
})

export const hotTracksFailure = (data) => ({
    type: hotTracksActions.HOT_TRACK_FAILURE,
    payload: data
})