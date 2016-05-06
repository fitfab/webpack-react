'use stirct';
import {
    REQUEST_BEGIN,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
    LOGIN_REQUEST_BEGIN,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED
} from 'actions/NetworkActionTypes';

const initialState = {
    busy: false,
    error: null,
    secureUser: false,
    user: null
};

export default function NetworkReducer(state, action) {
    if (typeof state === 'undefined') {
        state = initialState;
    };
    // LOGIN_REQUEST_BEGIN
    switch (action.type){

        case REQUEST_BEGIN:
            state = Object.assign({}, state, { busy: true });
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

        case LOGIN_REQUEST_BEGIN:
            state = Object.assign({}, state, { busy: true });
            break;

        case LOGIN_REQUEST_SUCCESS:
            state = Object.assign({}, state, {
                busy: false,
                error: null,
                secureUser: true,
                user: action.payload
            });
            break;

        case LOGIN_REQUEST_FAILED:
            state = Object.assign({}, state, {
                busy: false,
                error: action.error
            });
            break;
    }

    return state;

};

