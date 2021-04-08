import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../utils/route_util';
import LoginContainer from '../login_signup/login_container';


export default () => (
    <div className="logout-navbar">
        <h3 className="logout-nav-trellis">Trellis</h3>
        <AuthRoute path='/signup' className="log-in" component={LoginContainer}>Log in</AuthRoute>
        <Link to="/login" className="log-in">Log in</Link>
        <Link to="/signup" className="sign-up">Sign up</Link>
    </div>
)