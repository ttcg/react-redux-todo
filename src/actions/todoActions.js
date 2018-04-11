import * as actionTypes from '../actions/actionTypes';
import TodoService from '../services/TodoService';


export const addTodoItemSuccess = todoItem => ({ type: actionTypes.ADD_TODO_ITEM_SUCCESS, payload: true });

export const loadTodoItemsSuccess = items => ({ type: actionTypes.LOAD_TODO_SUCCESS, payload: items });

export const removeTodoItem = index => ({ type: actionTypes.REMOVE_TODO_ITEM, payload: index });

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