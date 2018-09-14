import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Register extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    signin = e =>{
        e.preventDefault()

        axios
            .post('http://localhost:3300/api/register', this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
                this.props.history.push('/jokes')
            })
            .catch(err => {
                console.err(err);
            });
    }

    render() {
        return (
            <form onSubmit = {this.signin}>
                <div>
                    <label>Username</label>
                    <input name = 'username' value = {this.state.username} onChange = {this.handleChange} type="text"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input name = 'password' value = {this.state.password} onChange = {this.handleChange} type="password"></input>
                </div>
                <div>
                    <button type = "submit">Register</button>
                    <Link to = '/'><button>Back</button></Link>
                </div>
            </form>
            );
    }
}

export default Register;