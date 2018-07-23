/**
 * Axios Request Wrapper
 * ---------------------
 *
 * @author  Seersol
 *
 */

import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Constants }  from './constants'


/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: Constants.api.base_url
});



/**
 * Request Wrapper with default success/error actions
 */
const request = function(options) {
  const onSuccess = function(response) {
   // console.debug('Request Successful!', response);
    return response.data;
  }

  const onError = function(error) {
    if (error.response) {
      toast.error(error.response.data.message || error.response.data.error);
      // Request was made but server responded with something
      // other than 2xx
     // console.log('Status:',  error.response.status);
     // console.log('Data:',    error.response.data);
     // console.log('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      //network error
     // console.log('Error Message:', error.message);
      toast.error(error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return client(options)
        .then(onSuccess)
        .catch(onError);
}

export default request;