import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'
import Logout from '../components/Logout'
import {Test} from '../components/Test'

const Routes = [
    {
      path: '/dashboard',
      component: Dashboard,
      authGuard: true
    },
    {
      path: '/profile',
      component: Profile,
      authGuard: true
    },
    {
      path: '/logout',
      component: Logout,
      authGuard: true
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/form',
      component: Test
    },
    {
      path: '/login',
      component: Login,
    }, 
    {
        path: '/register',
        component: Register
    },
    {
      path: '/',
      exact: true,
      component: Home
    }
  ]

  export default Routes