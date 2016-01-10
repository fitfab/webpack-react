'use stirct';
import {
    REQUEST_BEGIN,
    REQUEST_SUCCESS,
    REQUEST_FAILED
} from './../actions/NetworkActionTypes';

export default function NetworkReducer(state = {}, action) {

    switch(action.type){

        case REQUEST_BEGIN:
            state = Object.assign({}, state, {busy: true})
            break;

        case REQUEST_SUCCESS:
            state = Object.assign({}, state, {
                busy: false,
                products: action.data
            });
            break;

        case REQUEST_FAILED:
            state = Object.assign({}, state, {busy: false});
            break;
    }

    return state;

};

