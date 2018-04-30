import * as actionTypes from '../actions/actionTypes';
import TodoService from '../services/TodoService';

const resetTodoSuccess = () => ({ type: actionTypes.RESET_TODO_SUCCESS });

export const resetTodoUnmount = () => ({ type: actionTypes.RESET_TODO_UNMOUNT });

const addTodoItemSuccess = () => ({ type: actionTypes.ADD_TODO_ITEM_SUCCESS });

const saveNewTodoItemSuccess = () => ({ type: actionTypes.SAVE_NEW_TODO_ITEM_SUCCESS });

export const addTodoUnmount = () => ({ type: actionTypes.ADD_TODO_UNMOUNT });

const loadTodoItemsSuccess = items => ({ type: actionTypes.LOAD_TODO_SUCCESS, payload: items });

const removeTodoItemSuccess = (items) => ({ type: actionTypes.REMOVE_TODO_SUCCESS, payload: items });

const markTodoItemSuccess = (items) => ({ type: actionTypes.MARK_TODO_SUCCESS, payload: items });

const getTodoItemSuccess = (item) => ({ type: actionTypes.GET_TODO_ITEM_SUCCESS, payload: item });

const updateTodoItemSuccess = (items) => ({ type: actionTypes.UPDATE_TODO_SUCCESS, payload: items });


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

export const saveNewTodoItem = (item) => {
    return function (dispatch) {
        return TodoService.add(item).then(() => {
            dispatch(saveNewTodoItemSuccess());
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

export const markTodoItem = (id, data) => {
    return function (dispatch) {
        return TodoService.mark(id, data).then(() => {
            return TodoService.getAll().then(items => {
                dispatch(markTodoItemSuccess(items));
            });
        });
    };
}

export const getTodoItem = (id) => {
    return function (dispatch) {
        return TodoService.get(id).then(item => {
            dispatch(getTodoItemSuccess(item));
        });
    };
}

export const updateTodoItem = (id, data) => {
    return function (dispatch) {
        return TodoService.update(id, data).then(() => {
            dispatch(updateTodoItemSuccess());
        });
    };
}