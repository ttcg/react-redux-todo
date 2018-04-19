import * as actionTypes from '../actions/actionTypes';

var initialState = {
    resetTodoSuccess: false,
    addTodoSuccess: false,
    removeTodoSuccess: false
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO_ITEM_SUCCESS: {
            return { ...state, addTodoSuccess: true };
        }
        case actionTypes.LOAD_TODO_SUCCESS: {
            return { ...state, tasks: action.payload, addTodoSuccess: false, removeTodoSuccess: false, resetTodoSuccess: false };
        }
        case actionTypes.REMOVE_TODO_SUCCESS: {            
            return { ...state, tasks: action.payload, removeTodoSuccess: true };            
        }        
        case actionTypes.RESET_TODO_SUCCESS: {            
            return { ...state, resetTodoSuccess: true };
        } 
        case actionTypes.RESET_TODO: {            
            return { ...state, resetTodoSuccess: false };
        } 
        default:
            return state;
    }
}

export default todoReducer;