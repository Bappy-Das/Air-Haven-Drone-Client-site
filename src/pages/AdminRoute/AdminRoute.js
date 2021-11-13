import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useAuth from '../../hooks/useAuth';

// import './PrivateRoute.css'

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const { admin } = useAdmin()
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;