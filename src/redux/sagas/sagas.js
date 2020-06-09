import { takeEvery, put, delay, call } from 'redux-saga/effects'
import Axios from 'axios'

const fetchUsers = (id) => Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            console.log(res.data)
            const data = res.data.title
            return { data }
        })
        .catch((error) => {
            return { error }
        })


function* increaseAsync(payload) {
    yield put({type: 'SET_LOADING'});
    yield delay(200);
    try {
        const { data, error } = yield call(fetchUsers, payload.payload);
        //console.log(data)
        yield put({type: 'INCREASE_ASYNC', payload: JSON.stringify(data) });
    } catch (error) {
        //エラーの場合
    }
    yield put({type: 'NOT_LOADING'});
}

export default function* rootSaga() {
    yield takeEvery('INCREASE', increaseAsync);
}