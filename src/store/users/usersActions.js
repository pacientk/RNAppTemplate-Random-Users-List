import * as types from './usersTypes';

export const setUsers = () => ({
    type: types.GET_USERS,
});
export const setUsersSuccess = (users) => ({
    type: types.GET_USERS_SUCCESS,
    payload: users
});
