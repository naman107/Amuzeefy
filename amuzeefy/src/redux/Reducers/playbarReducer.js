import { playbarActionTypes } from '../Actions/actionTypes'

const initialState = {
    play: false,
    pause: true,
    // skipRight: false,
    // skipLeft: false,
    // shuffle: false,
    loop: false
}

const playbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case playbarActionTypes.PLAY: {
            return {
                ...state,
                play: action.payload
            }
        }
        case playbarActionTypes.PAUSE: {
            return {
                ...state,
                pause: action.payload
            }
        }
        case playbarActionTypes.LOOP: {
            return {
                ...state,
                loop: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default playbarReducer