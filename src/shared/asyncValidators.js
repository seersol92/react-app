import request from './Request'

const sleep = ms => new Promise((resolve) => setTimeout(resolve,ms))
const asyncValidate = (values /*, dispatch */) => {
 return sleep(1000).then(() => {
    // simulate server latency
          return request({
            url:    `/auth/check-user-name/${values.userName}`,
            method: 'GET'
          })
          .then( response => {
            if (response.success) {
             throw {userName: 'That username is taken'}
            }
          })
          .catch ( err => {
          throw  {userName: 'That username is taken'}
          }
        );
  })
}

export default asyncValidate  