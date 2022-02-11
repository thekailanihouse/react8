import React from 'react'
import { Navigate, Route } from 'react-router'
import { auth } from '../service/firebase'

const PrivateRoute = ({children, ...rest}) => {
    const Auth = auth.currentUser
    return(
        <Route
        {...rest}
        render={() => Auth ? children : <Navigate to='/login'/>} />
    )
}

export default PrivateRoute