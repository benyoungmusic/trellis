import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import LogOutHome from './home/home'

export default () => (
    <div>
        <Route exact path='/' component={LogOutHome}/>
    </div>
)
