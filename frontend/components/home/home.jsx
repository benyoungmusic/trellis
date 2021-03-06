import React from 'react';
import LogoutNavBar from './logout_home_navbar';
import { Route, Link } from 'react-router-dom';
import BoardIndexContainer from '../boards/board_index_container';

const Home = ({ currentUser, logout }) => {

    const logOutHome = () => (
        <div className='home'>
            <Route path="/" component={LogoutNavBar} />
            <h1 className="tag-line-1">Trellis helps teams do stuff.</h1>
            <p className="paragraph-1">Collaborate on stuff, manage stuff, reach new stuff-related productivity peaks.
                From expensive places to do stuff to cheap places to do stuff, the way you
                do stuff is different from the ways other people do stuff. Do all your stuff
                with Trellis
            </p>
            <h1 className="tag-line-2">It’s more than working on stuff. It’s a way of 
            working together on stuff.</h1>
            <p className="paragraph-2">Start doing stuff with a Trellis board, 
            lists, and cards. Customize and expand the way you do stuff with more
            features as your teamwork and ability to do more stuff grows. 
            Manage stuff, organize stuff, and build team spirit—all stuffed into 
            one place.</p>
            <Link to="/signup" className="log-in-2">Start doing stuff →</Link>

        </div>
    );

    const logInHome = () => (
        <div>
            <div className="login-navbar">
                <h1 className="login-navbar-trellis">Trellis</h1>
                <button className="login-navbar-logout" onClick={logout}>Log Out</button>
            </div>
            <div className="board-index">
                <h1 className="board-index-header">Personal Boards</h1>
                <BoardIndexContainer />
            </div>
        </div>
    );

    return currentUser ? logInHome() : logOutHome();
}

export default Home;