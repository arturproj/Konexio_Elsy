import React from 'react';

import Icon from './Icon';

import Slider from './core/Slider';

class Temperature extends React.Component{

    render(){
        return(
            <div className="box col-md-3 col-6 text-center">
                <Icon name="wb_sunny" stylesheet="sunny"/>
                <p>{this.props.temperature} °C</p>
                <Slider 
                    min={this.props.min} 
                    max={this.props.max} 
                    onChange={this.props.onChange} 
                    value={this.props.temperature} 
                />
            </div>
        );
    }

}

export default Temperature;