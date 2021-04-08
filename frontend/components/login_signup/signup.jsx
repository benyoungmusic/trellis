import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: null
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
        this.setState({ redirect: `signup/${this.state.email}` })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <div className="session-form">
                <h1 className="session-form-logo">Trello</h1>
                <div className="session-container">
                    <h3 className="container-header">Sign up for your account</h3>
                    <form className="session-form-container">
                        <input type="text"
                            placeholder="Enter email"
                            onChange={this.handleInput('email')}
                        />
                        {/* <Link to='/signup2'>Continue</Link> */}
                    <button className="continue-button" onClick={this.handleSubmit}>Continue</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Signup;