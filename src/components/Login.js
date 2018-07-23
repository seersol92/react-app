import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import * as actions from './../store/actions/index';

class Login extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isFormProcessing: true });
        this.props.onAuth(this.state.email, this.state.password)
    }

    render() { 
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        };
        return (
        <div>
            {authRedirect}
            <div className="container mt-5">
            <div className="row justify-content-md-center">
                <div className="col-lg-6 col-sm-12">
                    <form  className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h5>Please Login</h5>
                        </div>
                        <div className="col-lg-6 col-md-6  float-right">
                            <Link className="btn btn-link float-right" to={'/register'}>Create an account?</Link>   
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group has-danger">
                                <label className="sr-only" for="email-or-username">User-Name Or E-Mail Address</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon mr-3 mt-2" ><i className="fa fa-at"></i></div>
                                    <input 
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="User-Name Or E-mail"
                                     onChange={this.handleChange} 
                                    required autofocus />
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
                                    <input 
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    onChange={this.handleChange} 
                                    placeholder="Password" required />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row" >
                        <div className="col-12">
                            <button 
                            type="submit" 
                            disabled = {this.props.loading}
                            className="btn btn-success float-left ml-4"
                            >
                                <i className="fa fa-sign-in"></i> &nbsp; 
                                Login
                            </button>
                            <Link className="btn btn-link float-right" to={'/'}>Forgot Your Password?</Link>
                        </div>
                    </div>        
                    </form>
                </div>
            </div>
            </div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password ) => dispatch( actions.auth( email, password ) ),
    }
}
 
export default  connect(mapStateToProps, mapDispatchToProps)(Login);