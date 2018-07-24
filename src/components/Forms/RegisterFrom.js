import React from 'react'
import { Field, reduxForm } from 'redux-form'
import asyncValidate from './../../shared/asyncValidators'
import validate from './../../shared/validate'
import './Form.css'



const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
    <div className="row">
    <div className="col-12">
        <div className="form-group has-danger">
            <label className="sr-only" for="email">{label}</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0" >
                <input {...input} placeholder={label} type={type} class="form-control"/>
            </div>
            { touched &&
                ((error && 
                    <span className="error">
                        {error}
                    </span>
                ))
            }
        </div>
        </div>
    </div> 
)

const RegisterForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>

      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />

      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />

      <Field
        name="userName"
        type="text"
        component={renderField}
        label="User Name"
      />

      <Field 
        name="email"
        type="email"
        component={renderField}
        label="Email"
       />

      <Field 
        name="password"
        type="password"
        component={renderField}
        label="Confirm Password" 
      />

      <Field 
        name="confirm_password"
        type="password"
        component={renderField}
        label="Password" 
      />
        <div className="row float-right mr-1" >
            <button type="button" className="btn btn-default mr-2" disabled={pristine || submitting} onClick={reset}>
                Reset
            </button>
            <button type="submit" className="btn btn-success " disabled={submitting}>
                <i className="fa fa-sign-in"></i> &nbsp;
                Register
            </button>
        </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  asyncValidate,
  asyncBlurFields: ['userName', 'email']
})(RegisterForm)
