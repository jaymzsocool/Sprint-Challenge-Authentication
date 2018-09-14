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
            <div onClick={this.toggleActive}>
                {(!this.state.active)
                ?
                <div>
                    {this.props.setup}           
                </div>
                :
                <div>
                    {this.props.punchline}
                </div>}
            </div>        
        );
    }
 
};

export default JokeCard;