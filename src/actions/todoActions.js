import * as actionTypes from '../actions/actionTypes';
import TodoService from '../services/TodoService';

const resetTodoSuccess = () => ({ type: actionTypes.RESET_TODO_SUCCESS });

const addTodoItemSuccess = () => ({ type: actionTypes.ADD_TODO_ITEM_SUCCESS });

const loadTodoItemsSuccess = items => ({ type: actionTypes.LOAD_TODO_SUCCESS, payload: items });

const removeTodoItemSuccess = (items) => ({ type: actionTypes.REMOVE_TODO_SUCCESS, payload: items });

export const resetTodo = () => ({ type: actionTypes.RESET_TODO });

export const loadTodoItems = () => {
    return function (dispatch) {
        return TodoService.getAll().then(items => {
            dispatch(loadTodoItemsSuccess(items));
        });
    };
}

export const addTodoItem = (item) => {
    return function (dispatch) {
        return TodoService.add(item).then(() => {
            dispatch(addTodoItemSuccess());
        });
    };
}

export const removeTodoItem = (id) => {
    return function (dispatch) {
        return TodoService.remove(id).then(() => {
            return TodoService.getAll().then(items => {
                dispatch(removeTodoItemSuccess(items));
            });
        });
    };
}

export const resetTodoItem = () => {
    return function (dispatch) {
        return TodoService.reset().then(() => {
            dispatch(resetTodoSuccess());
        });
    };
}