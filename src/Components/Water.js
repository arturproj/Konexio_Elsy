import React from 'react';

import Icon from './Icon';

class Water extends React.Component{

    render(){
        return(
            <div className="box col-md-3 col-6 text-center">
                <Icon name="local_drink" stylesheet="water"/>
                <p>{this.props.water} LT</p>
            </div>
        );
    }

}

export default Water;