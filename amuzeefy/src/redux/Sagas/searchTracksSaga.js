import { put, select } from 'redux-saga/effects'
import axios from 'axios'
import { baseUrl, urlEndPoints } from '../../Utils/URLs/urls'
import { searchTracksRequestSuccess, searchTracksRequestFailure } from '../Actions/searchTracksAction'
// import searchTracksReducers from '../Reducers/searchTracksReducer'

function* searchTracksSaga() {
    try {
        const { searchTracksReducer } = yield select()
        const { searchString } = searchTracksReducer
        const result = yield axios.get((baseUrl + urlEndPoints.search), {
            params: {
                q: searchString,
                format: 'json'
            }
        }).then(res => console.log(res))
        yield put(searchTracksRequestSuccess(result))
    } catch (error) {
        yield put(searchTracksRequestFailure())
        console.log(error)
    }
}

export default searchTracksSaga