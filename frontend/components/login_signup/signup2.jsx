import React from 'react';

class Signup2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.match.params.email,
            name: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    render() {
        return (
            <div className="session-form">
                <h1 className="session-form-logo">Trello</h1>
                <div className="session-container">
                    <h3 className="container-header">Sign up for your account</h3>
                    <form className="session-form-container">
                        <input type="text"
                            value={this.props.match.params.email}
                            onChange={this.handleInput('email')}
                        />
                        <input type="text" 
                            placeholder="Enter full name"
                            onChange={this.handleInput('name')}
                        />
                        <input type="password"
                            placeholder="Enter Password"
                            onChange={this.handleInput('password')}
                        />
                        <button className="signup-button" onClick={this.handleSubmit}>Sign up</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Signup2;