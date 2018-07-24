import React from 'react'
import { Field, reduxForm } from 'redux-form'
import asyncValidate from './../shared/asyncValidators'
import validate from './../shared/validate'



const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div className="row">
    <div className="col-12">
            <div className="form-group has-danger">
                <label className="sr-only" for="email">{label}</label>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <input {...input} placeholder={label} type={type} class="form-control"/>
                {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
                </div>
            </div>
        </div>
    </div> 
)

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email"/>
      <Field name="age" type="number" component={renderField} label="Age" />

      <Field name="password" type="password" component={renderField} label="Password" />
      <Field name="confirm_password" type="password" component={renderField} label="Confirm Password" />
      <div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  asyncValidate,
  asyncBlurFields: ['username', 'email']
})(SyncValidationForm)
