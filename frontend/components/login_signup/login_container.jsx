import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(Login);