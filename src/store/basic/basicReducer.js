import * as basicTypes from './basicTypes';

const INITIAL_STATE = {
    appFullyLoaded: false,
    buttonLoader: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case basicTypes.APP_FULLY_LOADED: {
            return {
                ...state,
                appFullyLoaded: true,
            };
        }
        case basicTypes.TOGGLE_BTN_LOADER: {
            return {
                ...state,
                buttonLoader: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
