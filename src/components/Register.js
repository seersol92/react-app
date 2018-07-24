import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RegisterForm from './Forms/RegisterFrom'
class Register extends Component {

    submit = values => {
    // print the form values to the console
        console.log(values)
    }

    render() { 
        return (
        <div>
            <div className="container mt-5">
            <div className="row justify-content-md-center">
                <div className="col-lg-6 col-sm-12">
                    <div className="row">
                        <div className="col-12 ml-4">
                            <h5>Create New Account</h5>
                            < hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ml-4">
                            <RegisterForm onSubmit={this.submit} />   
                        </div>
                    </div>      
                </div>
            </div>
            </div>
        </div>)
    }
}
 
export default Register;