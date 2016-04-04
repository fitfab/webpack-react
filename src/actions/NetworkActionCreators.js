import Firebase from 'firebase';
import FirebaseConfig from './../constants/FirebaseConfig';
import {
    REQUEST_BEGIN,
    REQUEST_SUCCESS,
    REQUEST_FAILED
} from './NetworkActionTypes';

// To read and write data to and from a Firebase database,
// we need to first create a reference to it
const baseRef  = new Firebase(FirebaseConfig.url);

// Reference to the user collection
const usersRef = baseRef.child(FirebaseConfig.users);

// reference to the product collection
const prodsRef = baseRef.child(FirebaseConfig.products);

/**
 * Creates action for when the request begin
 * @param  {object} firebase a database reference
 * @return {obejct} action indicating request begun
 *
 */
export function requestBegin() {
    return {
        type: REQUEST_BEGIN
    };
}

/**
 * [requestSuccess description]
 * @param  {object} response the database response
 * @return {obejct} action
 *
 */
export function requestSuccess(response) {
    return {
        type: REQUEST_SUCCESS,
        data: response,
        receiveAt: Date.now()
    };
}

export function requestFailed(error) {
    return {
        type: REQUEST_FAILED,
        error: error,
        receiveAt: Date.now()
    };
}

/**
 * 1st thunk creator using firebase as
 * the database
 *
 * http://rackt.org/redux/docs/advanced/AsyncActions.html
 */
export function fetchData() {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function (dispatch) {

        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestBegin());

        // 1st call to database and listen for changes
        baseRef.child('users').on('value', function (snapshot) {
            // dispatch a success action
            dispatch(requestSuccess(snapshot.val()));
        });
    };
};

// TODO: revise the implementation of register user
export function register(user) {
    console.log(user)
    return function (dispatch) {
        // 1. Informs that the request started
        dispatch(requestBegin('firebase'));

        // 2. save new record
        //usersRef.push().set();
        baseRef.createUser({
            email: user.email,
            password: user.password
        }, function(error,userData){
            if(error) {
                console.log('Error creating user: ', error);
            } else {
                console.log('user created: ', userData);
                dispatch(requestSuccess(userData));
            }
        });
    };
};

// TODO: revise the implementation of register user
export function login(user) {
    console.log('Login : ',user)
    return function (dispatch) {
        // 1. Informs that the request started
        dispatch(requestBegin());

        // 2. authenticate user
        baseRef.authWithPassword({
            email: user.email,
            password: user.password
        }, function(error, authData){
            if(error) {
                dispatch(requestFailed(error));
            } else {
                dispatch(requestSuccess(authData));
                console.log(authData);
            }

        },{
            /* session exprire when browser closes */
            remember: 'sessionOnly'
        })
    };
}

