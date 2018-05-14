import * as actionTypes from '../actions/actionTypes';

var initialState = {
    numbersOfAjaxCall: 0
}

function actionTypeEndsInInSuccess(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

const ajaxStatusReducer = (state = initialState.numbersOfAjaxCall, action) => {
    if (action.type === actionTypes.AJAX_BEGIN_CALL) {
        return state + 1;
    }
    else if (actionTypeEndsInInSuccess(action.type)) {
        return state - 1 < 0 ? 0 : state - 1;
    }

    return state;
}

export default ajaxStatusReducer;