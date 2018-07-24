const validate = values => {
    const errors = {}
    
    if (!values.firstName) {
        errors.firstName = 'First Name is required!'
    } else if (values.firstName.length > 15) {
        errors.firstName = 'First Name must be 15 characters or less'
    }

    if (!values.lastName) {
        errors.lastName = 'Last Name is required!'
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Last Name must be 15 characters or less'
    }

    if (!values.userName) {
        errors.userName = 'User Name is required!'
      } else if (values.userName.length > 15) {
        errors.userName = 'User Name must be 15 characters or less'
    }

    if (!values.email) {
        errors.email = 'E-mail is required!'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
  
    if (!values.password) {
        errors.password = 'Password is required'
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 character long!'
      } else if ( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(values.password)) {
        errors.password = 'Password must contain a upper, lower, number and special characters.'
    }
  
      if (!values.confirm_password) {
        errors.confirm_password = 'Confrim Password is required!'
      } else if (values.password !== values.confirm_password) {
        errors.confirm_password = 'Passwords MissMatch!'
      }
  
    return errors
  }


  export default validate