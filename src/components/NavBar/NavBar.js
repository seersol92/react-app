import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

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
            {!this.props.isAuth 
                  ?
                   <li className="nav-item">
                      <Link  to={'/login'} activeClassName="active" className="nav-link">Login</Link>
                    </li>                
              : null
            }
            {!this.props.isAuth 
                  ?
                   <li className="nav-item">
                      <Link  to={'/register'} activeClassName="active" className="nav-link">Register</Link>
                    </li>                
              : null
            }
            {this.props.isAuth 
                  ?
                   (
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.props.user.username.toUpperCase()}
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link  to={'/profile'}  className="dropdown-item">Profile</Link>
                            <div className="dropdown-divider"></div>
                            <Link  to={'/logout'} className="dropdown-item">Logout</Link>
                          </div>
                      </li>
                   )               
              : null
            }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
 
export default NavBar;