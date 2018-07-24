const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.age) {
      errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old'
    }
  
    if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 character long!'
      } else if ( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(values.password)) {
          errors.password = 'Password must contain a upper, lower, number and special characters.'
      }
  
      if (!values.confirm_password) {
          errors.confirm_password = 'Required'
        } else if (values.password !== values.confirm_password) {
          errors.confirm_password = 'Passwords MissMatch!!'
        }
  
    return errors
  }


  export default validate