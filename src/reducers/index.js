import { combineReducers } from 'redux';
import todo from './todoReducer';

const rootReducer = combineReducers({
    tasks: todo
});

export default rootReducer;