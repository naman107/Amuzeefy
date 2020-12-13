import { put, select } from 'redux-saga/effects'
import axios from 'axios'
import { baseUrl, urlEndPoints } from '../../Utils/URLs/urls'
import { loginRequestFailure, loginRequestSuccess } from '../Actions/loginAction'

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
                md5: passwordParam
            }
        })
        yield put(loginRequestSuccess(result))
    } catch (error) {
        yield put(loginRequestFailure(error))
        console.log('LOGIN', error)
    }

}

export default loginSaga