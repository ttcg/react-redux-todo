import * as actionTypes from '../actions/actionTypes';
import TodoService from '../services/TodoService';

//export const addTodoItem = () => ({ type: actionTypes.ADD_TODO_ITEM });

export const addTodoItemSuccess = todoItem => ({ type: actionTypes.ADD_TODO_ITEM_SUCCESS });

export const loadTodoItemsSuccess = items => ({ type: actionTypes.LOAD_TODO_SUCCESS, payload: items });

export const removeTodoItemSuccess = () => ({ type: actionTypes.REMOVE_TODO_ITEM });

export const loadTodoItems = () => {
    return function (dispatch) {
        return TodoService.getAll().then(items => {
            dispatch(loadTodoItemsSuccess(items));
        });
    };
}

export const addTodoItem = (item) => {
    return function (dispatch) {
        return TodoService.add(item).then(item => {
            dispatch(addTodoItemSuccess(item));
        });        
    };
}

export const removeTodoItem = (id) => {
    return function (dispatch) {
        return TodoService.remove(id).then(item => {
            dispatch(removeTodoItemSuccess());
        });        
    };
}