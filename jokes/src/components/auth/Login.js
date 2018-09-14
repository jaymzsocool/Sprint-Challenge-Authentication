import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


class Login extends Component {
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
            .post('http://localhost:3300/api/login', this.state)
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
            <div className="">
                <form onSubmit = {this.signin}>
                    <div className="">
                        <label>Username</label>
                        <input name = 'username' value = {this.state.username} onChange = {this.handleChange} type="text"></input>
                    </div>
                    <div className="">
                        <label>Password</label>
                        <input name = 'password' value = {this.state.password} onChange = {this.handleChange} type="password"></input>
                    </div>
                    <div className="">
                        <button type = "submit">Sign In</button>
                        <Link to = '/'><button>Back</button></Link>
                    </div>
                </form>
            </div>
           
        );
    }
}

export default Login;