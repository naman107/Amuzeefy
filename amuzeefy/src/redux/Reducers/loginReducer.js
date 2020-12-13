const { loginActionTypes } = require("../Actions/actionTypes")

const initialState = {
    data: {},
    loading: false,
    error: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginActionTypes.LOGIN_REQUEST: {
            return {
                ...state,
                data: {},
                loading: true,
                error: ''
            }
        }
        case loginActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        }
        case loginActionTypes.LOGIN_FAILURE: {
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

export default loginReducer