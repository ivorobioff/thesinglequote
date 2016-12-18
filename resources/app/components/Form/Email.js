import React, { Component, PropTypes } from 'react';
import Input from './Input';

class Email extends Component {
    render(){
        return <Input 
            label={this.props.label}
            registerControl={this.props.registerControl} 
            name={this.props.name} 
            value={this.props.value} 
            type="email" />
    }
}

Email.propTypes = {
    name: PropTypes.string.isRequired
}

export default Email;