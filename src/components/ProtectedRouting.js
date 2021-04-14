import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from '../auth';

const ProtectedRouting = ({
    component: Component,
    ...rest }) => {
    return (
        <Route {...rest}
            render={
                (props) => {
                    if (auth.isAuthenticated) { // if user logged in then only show protected component
                        return <Component {...props} />
                    } else { // else redirect to login page
                        return (
                            <Redirect
                                to={{
                                    pathname: '/',
                                    state: {
                                        from: props.location
                                    }
                                }}
                            />);
                    }
                }
            }
        />

    )
}


export default ProtectedRouting;