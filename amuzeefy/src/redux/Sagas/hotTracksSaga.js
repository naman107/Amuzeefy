import { put } from 'redux-saga/effects'
import { hotTracksFailure, hotTracksSuccess } from '../Actions/hotTracksAction'
import axios from 'axios'
import { baseUrl, urlEndPoints } from '../../Utils/URLs/urls'

export default function* hotTracksSaga() {
    try {
        const result = yield axios.get((baseUrl + urlEndPoints.hot), {
            params: {
                format: 'json',
                limit: 10,
                skip: 2
            }
        })
        // console.log(result);
        yield put(hotTracksSuccess(result))
    } catch (error) {
        yield put(hotTracksFailure(error))
        console.log(error);
    }
}
