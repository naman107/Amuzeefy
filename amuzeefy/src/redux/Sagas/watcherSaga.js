import { all, takeLatest } from 'redux-saga/effects'
import { hotTracksActions, loginActionTypes, searchTracksActionTypes, userActionTypes } from '../Actions/actionTypes'
import hotTracksSaga from './hotTracksSaga'
import loginSaga from './loginSaga'
import searchTracksSaga from './searchTracksSaga'
import userSaga from './userSaga'

function* watcherSaga() {
    yield all([
        takeLatest(loginActionTypes.LOGIN_REQUEST, loginSaga),
        takeLatest(userActionTypes.USER_REQUEST, userSaga),
        takeLatest(hotTracksActions.HOT_TRACK_REQUEST, hotTracksSaga),
        takeLatest(searchTracksActionTypes.SEARCH_TRACK_REQUEST, searchTracksSaga)
    ])
}

export default watcherSaga