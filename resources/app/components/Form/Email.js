import React, { Component } from 'react';
import Input from './Input';

class Email extends Component {
    render(){
        return <Input {...this.props} type="email" />
    }
}

export default Email;