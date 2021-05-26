import { all, fork, takeLatest, put, call, select } from 'redux-saga/effects';
import startUsersSaga from "./users/usersSaga"

export default function* rootSaga() {
    yield all([
        fork(startUsersSaga),
    ]);
}
