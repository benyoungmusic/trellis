import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return (
            <div className="session-form">
                <h1 className="session-form-logo">Trello</h1>
                <div className="session-container">
                    <h3 className="container-header">Log in to Trellis</h3>
                    <form className="session-form-container">
                        <input type="text"
                        placeholder="Enter Email"
                        onChange={this.handleInput('email')}
                        />
                        <input type="password"
                        placeholder="Enter Password"
                        onChange={this.handleInput('password')}
                        />
                        <button className="login-button" onClick={this.handleSubmit}>Log in</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;