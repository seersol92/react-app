import React, { Component}  from 'react';
import Home from './../components/Home'
import Register from './../components/Register'
import Login from './../components/Login'

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