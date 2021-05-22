import * as basicTypes from './basicTypes';

const INITIAL_STATE = {
    testReduxStore: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case basicTypes.TEST_REDUX_STORE: {
            return {
                ...state,
                testReduxStore: action,
            };
        }
        default: {
            return state;
        }
    }
};
