import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { Navigate } from 'react-router'

const routes = (isLogin) => [
    {//private routes
        path:'/about',
        element: isLogin ? <About/> : <Navigate to='/login'/>,
        children: [
            {
                path:'/login', element:<Login/>
            }
        ]
    },
    {//public routes
        path:'/',
        element: !isLogin ? <Home/> : <Navigate to='/about'/>,
        children: [
            {
                path:'/', element:<Home/>
            },
            {
                path:'/register', element:<Register/>
            }
        ]
    }
]

export default routes