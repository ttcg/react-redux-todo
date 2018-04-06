import * as actionTypes from '../actions/actionTypes';
import TodoService from '../services/TodoService'; 

export const addTodoItem = todoItem => ({ type: actionTypes.ADD_TODO_ITEM, payload: todoItem });

export const removeTodoItem = index => ({ type: actionTypes.REMOVE_TODO_ITEM, payload: index });

export const loadTodoItems = () => {
    return function(dispatch) {
        return TodoService.getAll().then(items => {
            dispatch({ type: actionTypes.LOAD_TODO_SUCCESS, items });
        });
    };
}