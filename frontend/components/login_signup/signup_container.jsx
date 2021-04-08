import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup2 from './signup2';

const mapDispatchToProps = (dispatch) => ({
    signup: user => dispatch(signup(user))
})

export default connect(undefined, mapDispatchToProps)(Signup2);