import * as actionTypes from '../actions/actionTypes';

export const addTodoItem = todoItem => ({ type: actionTypes.ADD_TODO_ITEM, payload: todoItem });

export const removeTodoItem = index => ({ type: actionTypes.REMOVE_TODO_ITEM, payload: index });