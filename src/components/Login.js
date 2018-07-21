import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
        console.log(this.state);
        event.preventDefault();
    }
    render() { 
        return (
        <div>
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
                                <label className="sr-only" for="email">E-Mail Address</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon mr-3 mt-2" ><i className="fa fa-at"></i></div>
                                    <input 
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="you@example.com"
                                    value={this.state.password} onChange={this.handleChange} 
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
                                    value={this.state.email} onChange={this.handleChange} 
                                    placeholder="Password" required />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row" >
                        <div className="col-12">
                            <button type="submit" className="btn btn-success float-left ml-4">
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
 
export default Login;