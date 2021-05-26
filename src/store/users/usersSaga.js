import { takeLatest, put, take, call, select, race, delay } from 'redux-saga/effects';
import * as types from './usersTypes';
import { fetchUserApi } from "../../common/usersApi"
import { UsersActions } from "../actions"

function* callUsers() {
    const { response, timeout } = yield race({
        response: call(fetchUserApi),
        // timeout: delay(3000)
    });

    if (response) {
        const { res, error } = response;
        if (res) {
            yield put(UsersActions.setUsersSuccess(res.data.results))
        } else if (error)
            yield put(types.GET_USERS("Error Fetching Data!"));
    } else if (timeout)
        yield put(types.GET_USERS("5 Sec Timeout!"));
}

export default function* startUsersSaga() {
    yield takeLatest(types.GET_USERS, callUsers);
}
