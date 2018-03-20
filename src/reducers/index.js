import {ADD_TODO_ITEM, REMOVE_TODO_ITEM} from '../constants/action-types';

const initialState = {
  tasks: ['thet', 'wai']
};

const rootReducer = (state = initialState, action) => {   
    switch (action.type) {
    case ADD_TODO_ITEM:
        return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TODO_ITEM: {
        var newList = state.tasks.filter((elem, index, arr) => arr.indexOf(elem) !== action.payload);
        return {...state, tasks: newList };
    }
    default:
        return state;
    }
}


export default rootReducer;