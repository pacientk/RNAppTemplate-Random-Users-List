import * as types from './usersTypes';

export const setUsers = () => ({
    type: types.SET_USERS,
    // payload: users
});
export const setUsersSuccess = (users) => ({
    type: types.SET_USERS_SUCCESS,
    payload: users
});
