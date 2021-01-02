import { searchTracksActionTypes } from "../Actions/actionTypes"

const initialState = {
    data: '',
    loading: false,
    error: '',
    searchString: ''
}

const searchTracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchTracksActionTypes.SEARCH_TRACK_REQUEST: {
            return {
                ...state,
                data: '',
                loading: true,
                error: ''
            }
        }
        case searchTracksActionTypes.SEARCH_TRACK_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        }
        case searchTracksActionTypes.SEARCH_TRACK_FAILURE: {
            return {
                ...state,
                data: '',
                loading: false,
                error: action.payload
            }
        }
        case searchTracksActionTypes.SEARCH_TRACK_STRING: {
            return {
                ...state,
                searchString: action.payload
            }
        }
        default:
            return state
    }
}

export default searchTracksReducer