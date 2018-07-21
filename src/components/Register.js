import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
class Register extends Component {
    render() { 
        return (
        <div>
            <div className="container mt-5">
            <div className="row justify-content-md-center">
                <div className="col-lg-6 col-sm-12">
                    <form  className="form-horizontal" role="form">
                    <div className="row">
                        <div className="col-12 ml-4">
                            <h5>Create New Account</h5>
                            < hr />
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group has-danger">
                                <label className="sr-only" for="email">E-Mail Address</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon mr-3 mt-2" ><i className="fa fa-at"></i></div>
                                    <input type="text" name="email" className="form-control" id="email"
                                        placeholder="you@example.com" required autofocus />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label className="sr-only" for="password">Password</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon mr-3 mt-2" ><i className="fa fa-key"></i></div>
                                    <input type="password" name="password" className="form-control" id="password"
                                        placeholder="Password" required />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row" >
                        <div className="col-lg-4 col-md-6">
                            <button type="submit" className="btn btn-success float-left ml-4">
                                <i className="fa fa-sign-in"></i> &nbsp; 
                                Register
                            </button>
                        </div>
                        <div className="col-lg-8 col-md-6 ">
                            <Link className="btn btn-link float-right" to={'/login'}>Already have an account?</Link>
                        </div>
                    </div>        
                    </form>
                </div>
            </div>
            </div>
        </div>)
    }
}
 
export default Register;