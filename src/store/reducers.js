import { combineReducers } from 'redux';

import BasicReducer from './basic/basicReducer';
import UsersReducer from './users/usersReducer';

export default combineReducers({
    BasicReducer,
    UsersReducer
});
