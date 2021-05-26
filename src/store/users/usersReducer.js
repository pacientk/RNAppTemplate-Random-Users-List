import * as basicTypes from './usersTypes';

const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case basicTypes.GET_USERS: {
            return {
                ...state,
            };
        }
        case basicTypes.GET_USERS_SUCCESS: {
            return {
                users: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
