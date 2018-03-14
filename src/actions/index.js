import { ADD_TODO_ITEM } from '../constants/action-types';

export const addTodoItem = todoItem => ({ type: ADD_TODO_ITEM, payload: todoItem });