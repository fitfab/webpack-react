'use stirct';
import {
    REQUEST_BEGIN,
    REQUEST_SUCCESS,
    REQUEST_FAILED
} from './../actions/NetworkActionTypes';

const initialState = {
    busy: false,
    error: null
}

export default function NetworkReducer(state, action) {
    if (typeof state === 'undefined') {
        state = initialState
    }
    switch(action.type){

        case REQUEST_BEGIN:
            state = Object.assign({}, state, {busy: true})
            break;

        case REQUEST_SUCCESS:
            state = Object.assign({}, state, {
                busy: false,
                error: null,
                products: action.data
            });
            break;

        case REQUEST_FAILED:
            state = Object.assign({}, state, {
                busy: false,
                error: action.error
            });
            break;
    }

    return state;

};

