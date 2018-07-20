import React, { Component}  from 'react';

const Home = () => <h2>Home</h2>
const Login = () => <h2>Login</h2>
const Register = () => <h2>Register</h2>


const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login,
     /* routes: [
        {
          path: '/tacos/bus',
          component: Bus
        }     
      ] */
    }, 
    {
        path: '/register',
        component: Register
    }
  ]

  export default Routes