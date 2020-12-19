import { put, select } from 'redux-saga/effects'
import axios from 'axios'
import { baseUrl, urlEndPoints } from '../../Utils/URLs/urls'
import { loginRequestFailure, loginRequestSuccess } from '../Actions/loginAction'
import { storageKeys } from '../../Utils/Strings/strings'

function* loginSaga() {
    const { userDetailReducer } = yield select()
    const { email, password } = userDetailReducer
    const emailParam = email.email
    const passwordParam = password.password
    try {
        const result = yield axios.get(baseUrl + urlEndPoints.login, {
            params: {
                action: 'login',
                ajax: true,
                email: emailParam,
                md5: passwordParam,
                includeUser: true
            }
        })
        yield put(loginRequestSuccess(result))
        localStorage.setItem(storageKeys.USER_ID_STORAGE, result.data.user._id)
    } catch (error) {
        yield put(loginRequestFailure(error))
        console.log('LOGIN', error)
    }

}

export default loginSaga