import React from 'react';

import Icon from './Icon';

import Slider from './core/Slider';

class Person extends React.Component{

    render(){
        return(
            <div className="box col-md-3 col-6 text-center">
                <Icon name="directions_walk" stylesheet="person" />
                <p>{this.props.steps} STEPS</p>
                <Slider 
                    min={this.props.min} 
                    max={this.props.max} 
                    onChange={this.props.onChange} 
                    value={this.props.steps} 
                />
            </div>
        );
    }

}

export default Person;