import * as basicTypes from './usersTypes';

const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case basicTypes.SET_USERS: {
            return {
                ...state,
                // users: action.payload,
            };
        }
        case basicTypes.SET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
