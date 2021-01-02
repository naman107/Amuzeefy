import { combineReducers } from 'redux'
import hotTracksReducer from './hotTracksReducer'
import loginReducer from './loginReducer'
import userDetailReducer from './userDetailReducer'
import userReducer from './userReducer'
import playbarReducer from './playbarReducer'
import searchTracksReducer from './searchTracksReducer'

const rootReducer = combineReducers({
    userDetailReducer: userDetailReducer,
    loginReducer: loginReducer,
    userReducer: userReducer,
    hotTracksReducer: hotTracksReducer,
    playbarReducer: playbarReducer,
    searchTracksReducer: searchTracksReducer
})

export default rootReducer