import { combineReducers } from 'redux'
import hotTracksReducer from './hotTracksReducer'
import loginReducer from './loginReducer'
import userDetailReducer from './userDetailReducer'
import userReducer from './userReducer'
import playbarReducer from './playbarReducer'

const rootReducer = combineReducers({
    userDetailReducer: userDetailReducer,
    loginReducer: loginReducer,
    userReducer: userReducer,
    hotTracksReducer: hotTracksReducer,
    playbarReducer: playbarReducer,
})

export default rootReducer