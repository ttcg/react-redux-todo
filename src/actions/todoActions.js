import * as actionTypes from '../actions/actionTypes';
import TodoService from '../services/TodoService'; 

//const addTodoItemSuccess = todoItem => ({ type: actionTypes.ADD_TODO_ITEM_SUCCESS, payload: todoItem });

const addTodoItemSuccess = todoItem => ({ type: actionTypes.ADD_TODO_ITEM_SUCCESS, payload: todoItem });

export const removeTodoItem = index => ({ type: actionTypes.REMOVE_TODO_ITEM, payload: index });

export const loadTodoItems = () => {
    return function(dispatch) {
        return TodoService.getAll().then(items => {
            dispatch({ type: actionTypes.LOAD_TODO_SUCCESS, items });
        });
    };
}

export const addTodoItem = (item) => {
    return function(dispatch) {
        return TodoService.add(item).then(item => {
            debugger;
            dispatch(addTodoItemSuccess(item));
            //loadTodoItems();
        });
    };
}