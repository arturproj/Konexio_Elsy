import React from 'react';

class Icon extends React.Component{

    render(){
        let myClassStyle = `material-icons ${this.props.stylesheet}`;
        return(
            <span className={myClassStyle}>
                {this.props.name}
            </span>
        );
    }

}

export default Icon;