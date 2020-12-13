const { userDetailActionTypes } = require("../Actions/actionTypes")

const initialState = {
    email: '',
    password: ''
}

const userDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case userDetailActionTypes.SET_USER: {
            return {
                ...state,
                email: action.payload,
                password: action.payload
            }
        }
        default:
            return state
    }
}

export default userDetailReducer