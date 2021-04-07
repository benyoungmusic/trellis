import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
    <div className="logout-navbar">
        <h3 className="logout-nav-trellis">Trellis</h3>
        <Link to="/" className="log-in">Log in</Link>
        <Link to="/" className="sign-up">Sign up</Link>
    </div>
)