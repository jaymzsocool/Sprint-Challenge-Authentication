import React, { Component } from 'react';
import axios from 'axios'
import JokeCard from './JokeCard'


class Jokes extends Component {
    state = {
        jokes:[]        
    }

    componentDidMount(){
        const token = localStorage.getItem('jwt');
        const reqOptions = {
            headers : {
                Authorization :token
            }
        }
        axios
            .get('http://localhost:3300/api/jokes', reqOptions)
            .then(res => {
                console.log(res.data);   
                this.setState({jokes: res.data})             
            })            
            .catch(err => {
                console.error(err);
            });
    }

    logOut = () => {
        localStorage.removeItem('jwt')
        this.props.history.push('/')
    }   

    render() {
        return (
            (this.state.jokes.length>0)
            ?
            <div>
                <button onClick = {this.logOut}>Sign Out</button>
                <div>
                    {this.state.jokes.map(joke => 
                        <JokeCard handleClick = {this.selectJoke} key = {joke.id} setup = {joke.setup} punchline = {joke.punchline} />
                    )}
                </div>
                
            </div>
            :
            <div>
                Loading List...
            </div>
        );
    }
}

export default Jokes;