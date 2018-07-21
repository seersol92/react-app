import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Routes from './routes/Router'
import Layout from './layout/Layout'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Layout>
         {Routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
          </Layout>
        </div>
      </Router>
    )
  }
}
export default App;