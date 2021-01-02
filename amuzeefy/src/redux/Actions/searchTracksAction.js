import { searchTracksActionTypes } from "./actionTypes"

export const searchTracksRequest = (data) => ({
    type: searchTracksActionTypes.SEARCH_TRACK_REQUEST,
    payload: data
})

export const searchTracksRequestSuccess = (data) => ({
    type: searchTracksActionTypes.SEARCH_TRACK_SUCCESS,
    payload: data
})

export const searchTracksRequestFailure = (data) => ({
    type: searchTracksActionTypes.SEARCH_TRACK_FAILURE,
    payload: data
})

export const searchTrackString = (data) => ({
    type: searchTracksActionTypes.SEARCH_TRACK_STRING,
    payload: data
})