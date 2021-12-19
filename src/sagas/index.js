import {all, fork} from 'redux-saga/effects';
import postsSaga from "./postSaga";


// Here, we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.
export default function* startForman() {
    yield all([
        fork(postsSaga)
        ])
}