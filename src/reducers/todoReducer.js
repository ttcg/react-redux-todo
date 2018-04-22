import * as actionTypes from '../actions/actionTypes';

var initialState = {
    tasks: [],
    resetTodoSuccess: false,
    addTodoSuccess: false,
    removeTodoSuccess: false,
    markTodoSuccess: false,
    redirectToListPage: false
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO_UNMOUNT: {
            return { ...state, addTodoSuccess: false, redirectToListPage: false };
        }
        case actionTypes.ADD_TODO_ITEM_SUCCESS: {
            return { ...state, addTodoSuccess: true, redirectToListPage: true };
        }
        case actionTypes.SAVE_NEW_TODO_ITEM_SUCCESS: {
            return { ...state, addTodoSuccess: true, redirectToListPage: false };
        }
        case actionTypes.LOAD_TODO_SUCCESS: {
            return { ...state, 
                tasks: action.payload, 
                addTodoSuccess: false, 
                removeTodoSuccess: false, 
                resetTodoSuccess: false, 
                markTodoSuccess: false 
            };
        }
        case actionTypes.REMOVE_TODO_SUCCESS: {            
            return { ...state, tasks: action.payload, removeTodoSuccess: true };            
        }        
        case actionTypes.RESET_TODO_SUCCESS: {            
            return { ...state, resetTodoSuccess: true };
        } 
        case actionTypes.RESET_TODO_UNMOUNT: {            
            return { ...state, resetTodoSuccess: false };
        } 
        case actionTypes.MARK_TODO_SUCCESS: {            
            return { ...state, tasks: action.payload, markTodoSuccess: true };            
        }
        default:
            return state;
    }
}

export default todoReducer;