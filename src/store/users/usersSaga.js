import { takeLatest, put, take, call, select, race, delay } from 'redux-saga/effects';
import * as types from './usersTypes';
import { setUsers } from "./usersActions"
import { fetchRandomUserApi } from "../../common/usersApi"
import { UsersActions } from "../actions"

function* callUsers(params) {
    // const page = yield select(getPage);
    const page = 1;
    const { response, timeout } = yield race({
        response: call(fetchRandomUserApi, page),
        // timeout: delay(1500)
    });

    if (response) {
        const { res, error } = response;
        if (res) {
            yield put(UsersActions.setUsersSuccess(res.data.results))
        } else if (error)
            yield put(types.SET_USERS("Error Fetching Data!"));
    } else if (timeout)
        yield put(types.SET_USERS("5 Sec Timeout!"));
}

export default function* startUsersSaga() {
    yield takeLatest(types.SET_USERS, callUsers);
}
