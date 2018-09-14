import React, { Component } from 'react';

class JokeCard extends Component{
    constructor(props){
        super(props),
        this.state = {
            active: false
        }
    }

    toggleActive = () => {        
        this.setState({ active: !this.state.active});
    };

    render(){
        return (
            <div onClick={this.toggleActive} className="card-wrap">
                {(!this.state.active)
                ?
                <div className="card-content">
                    {this.props.setup}           
                </div>
                :
                <div className="card-content">
                    {this.props.punchline}
                </div>}
            </div>        
        );
    }
 
};

export default JokeCard;