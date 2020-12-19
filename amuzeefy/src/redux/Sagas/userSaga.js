import { put } from 'redux-saga/effects'
import axios from 'axios'
import { baseUrl, urlEndPoints } from '../../Utils/URLs/urls'
import { userRequestFailure, userRequestSuccess } from '../Actions/userAction'
import { storageKeys } from '../../Utils/Strings/strings'

function* userSaga() {
    const userId = localStorage.getItem(storageKeys.USER_ID_STORAGE)
    try {
        const result = yield axios.get((baseUrl + urlEndPoints.user), {
            params: {
                id: userId
            }
        })
        yield put(userRequestSuccess(result))
    } catch (error) {
        yield put(userRequestFailure(error))
        console.log('USER', error)
    }
}

export default userSaga