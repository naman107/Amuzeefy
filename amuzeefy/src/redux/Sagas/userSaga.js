import { put } from 'redux-saga/effects'
import axios from 'axios'
import { baseUrl, urlEndPoints } from '../../Utils/URLs/urls'
import { userRequestFailure, userRequestSuccess } from '../Actions/userAction'

function* userSaga() {
    try {
        const result = yield axios.get((baseUrl + urlEndPoints.user))
        yield put(userRequestSuccess(result))
    } catch (error) {
        yield put(userRequestFailure(error))
        console.log('USER', error)
    }
}

export default userSaga