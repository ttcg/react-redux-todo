import { combineReducers } from 'redux';
import todo from './todoReducer';
import ajaxStatus from './ajaxStatusReducer';

const rootReducer = combineReducers({
    todo,
    ajaxStatus
});

export default rootReducer;