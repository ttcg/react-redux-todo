import * as actionTypes from '../actions/actionTypes';

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO_ITEM_SUCCESS: {
            return { ...state, addTodoSuccess: true };
        }
        case actionTypes.REMOVE_TODO_ITEM: {            
            return { ...state, removeTodoSuccess: true };
        }
        case actionTypes.LOAD_TODO_SUCCESS:
            return { ...state, tasks: action.payload };
        default:
            return state;
    }
}

export default todoReducer;