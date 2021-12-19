import axios from "axios";
import {
    all,
    call,
    put, takeLatest,
} from "redux-saga/effects";
import * as types from '../constants/actionTypes';

const getPosts = () =>
    axios.get("https://jsonplaceholder.typicode.com/todos");

function* fetchPostsSaga() {
    try {
        const response = yield call(getPosts);
        console.log(response)
        yield put({posts: []});
    } catch (e) {
        let message = "";
        e === "Network Error" ? (message = e) : (message = e.message);
        yield put({error: message});
    }
}

function* postsSaga() {
    yield all([takeLatest(types.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
