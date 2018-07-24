import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {  toast } from 'react-toastify';

import * as actions from './../store/actions/index';

class Logout extends Component {
    componentDidMount () {
        toast.info('Logging out....', {
            autoClose: 1500
        });
        this.props.onLogout();
    }

    render () {
        return <Redirect to="/"/>
       
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);