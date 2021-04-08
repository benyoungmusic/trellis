import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomeContainer from './home/home_container'
import LogInContainer from './login_signup/login_container'
import Signup from './login_signup/signup';
import SignUpContainer from './login_signup/signup_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';


export default () => (
    <div>
        <Route exact path='/' component={HomeContainer}/>
        <AuthRoute exact path='/login' component={LogInContainer}/>
        <AuthRoute exact path='/signup' component={Signup}/>
        <AuthRoute exact path='/signup/:email' component={SignUpContainer}/>
    </div>
)
