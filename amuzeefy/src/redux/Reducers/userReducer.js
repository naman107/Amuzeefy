const { userActionTypes } = require("../Actions/actionTypes")

const initialState = {
    data: {},
    loading: false,
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.USER_REQUEST: {
            return {
                ...state,
                data: {},
                loading: true,
                error: ''
            }
        }
        case userActionTypes.USER_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        }
        case userActionTypes.USER_FAILURE: {
            return {
                ...state,
                data: [],
                loading: false,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default userReducer