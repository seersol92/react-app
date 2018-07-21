import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class NavBar extends Component {
  render() { 
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link  to={'/'} className="navbar-brand">React-Shop</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link  to={'/login'} activeClassName="active" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
              <Link  to={'/register'} activeClassName="active" className="nav-link">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
 
export default NavBar;