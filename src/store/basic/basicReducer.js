import * as basicTypes from './basicTypes';

const INITIAL_STATE = {
    appFullyLoaded: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case basicTypes.APP_FULLY_LOADED: {
            return {
                ...state,
                appFullyLoaded: true,
            };
        }
        default: {
            return state;
        }
    }
};
