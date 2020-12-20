import { playbarActionTypes } from '../Actions/actionTypes'

const initialState = {
    play: false,
    pause: true,
    // skipRight: false,
    // skipLeft: false,
    // shuffle: false,
    loop: false,
    playedSeconds: 0,
    duration: 0,
    show_time: true
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
        case playbarActionTypes.START_TIME: {
            return {
                ...state,
                playedSeconds: action.payload
            }
        }
        case playbarActionTypes.DURATION: {
            return {
                ...state,
                duration: action.payload
            }
        }
        case playbarActionTypes.SHOW_TIME: {
            return {
                ...state,
                show_time: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default playbarReducer