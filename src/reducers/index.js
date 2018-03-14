import { ADD_TODO_ITEM } from '../constants/action-types';

const initialState = {
  tasks: []
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
    case ADD_TODO_ITEM:
        state.tasks.push(action.payload);
    default:
        return state;
    }
}


export default rootReducer;