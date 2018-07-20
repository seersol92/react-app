import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import Routes from './routes/Router'
import ButtonAppBar from './components/navBar'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <ButtonAppBar />
          <ul>
            <li><Link to="/home">home</Link></li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/register">register</Link></li>
          </ul>

         {Routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </div>
      </Router>
    )
  }
}
export default App;