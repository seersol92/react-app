import React from 'react'
import {
  withRouter,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux';
import Routes from './routes/Router'
import Layout from './layout/Layout'
import { PrivateRoute } from './store/utility'
import * as actions from './store/actions/index';


class App extends React.Component {

  componentDidMount () {
    console.log('here')
    this.props.onHardRefresh();
  }

  render() {
    return (
      <Router>
        <div>
        <Layout
        isAuthenticated = {this.props.isAuthenticated}
        userInfo= {this.props.userInfo}
        >
         {Routes.map((route) => (
           !route.authGuard ? ( <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />) 
            : <PrivateRoute  
              key={route.path}
              path={route.path}
              exact={route.exact}
              isAuth={this.props.isAuthenticated}
              component={route.component} 
            />
          ))}
          </Layout>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHardRefresh: () => dispatch( actions.authCheckState() )
  };
};

const mapStateToProps = state => {
  return {
      loading: state.auth.loading,
      error: state.auth.error,
      userInfo: state.auth.user,
      isAuthenticated: state.auth.token !== null,
      authRedirectPath: state.auth.authRedirectPath
  };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( App ));