import * as types from './basicTypes';

export const testReduxStore = (param) => ({
    type: types.TEST_REDUX_STORE,
    payload: param
});
