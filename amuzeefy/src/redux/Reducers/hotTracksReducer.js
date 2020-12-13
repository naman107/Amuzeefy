const { hotTracksActions } = require("../Actions/actionTypes")

const initialState = {
    data: {},
    loading: false,
    error: ''
}

const hotTracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case hotTracksActions.HOT_TRACK_REQUEST: {
            return {
                ...state,
                data: {},
                loading: true,
                error: ''
            }
        }
        case hotTracksActions.HOT_TRACK_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        }
        case hotTracksActions.HOT_TRACK_REQUEST: {
            return {
                ...state,
                data: {},
                loading: true,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default hotTracksReducer