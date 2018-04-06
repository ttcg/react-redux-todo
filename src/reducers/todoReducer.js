import * as actionTypes from '../actions/actionTypes';

const todoReducer = (state = [], action) => {   
    switch (action.type) {
    case actionTypes.ADD_TODO_ITEM:
        return [...state, action.payload] ;
    case actionTypes.REMOVE_TODO_ITEM: {
        var newList = state.filter((elem, index, arr) => arr.indexOf(elem) !== action.payload);
        return {...state, tasks: newList };
    }
    case actionTypes.LOAD_TODO_SUCCESS:
        return action.items;
    default:
        return state;
    }
}

export default todoReducer;