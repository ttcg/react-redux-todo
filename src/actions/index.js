import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from '../constants/action-types';

export const addTodoItem = todoItem => ({ type: ADD_TODO_ITEM, payload: todoItem });

export const removeTodoItem = index => ({ type: REMOVE_TODO_ITEM, payload: index });