import * as actionTypes from './actionTypes'
import request from './../../shared/Request'
import { toast } from 'react-toastify';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    } 
}

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: user
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (user, password) => {
    return dispatch => {
        //authenticate user here
        dispatch(authStart());
        request({
            url:    '/auth/login',
            method: 'POST',
            data:  {
                user: user,
                password: password
            }
          })
          .then( response => {
            localStorage.setItem('access_token', response.token);
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch(authSuccess(response.token, response.data));
            toast.success(response.message);
          })
          .catch ( err => {
            dispatch(authFail(err.data.message));
              // this.setState({ isFormProcessing: false })
          }
        );

    }
}