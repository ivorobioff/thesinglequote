import React, { Component, PropTypes } from 'react';
import Input from './Input';

class Password extends Component {
    render(){
        return <Input 
            label={this.props.label}
            registerControl={this.props.registerControl} 
            name={this.props.name} 
            value={this.props.value} 
            type="password" />
    }
}

Password.propTypes = {
    name: PropTypes.string.isRequired
}

export default Password;