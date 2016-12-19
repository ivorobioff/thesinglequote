import React, { Component } from 'react';
import Input from './Input';

class Password extends Component {
    render(){
        return <Input {...this.props} type="password" />
    }
}

export default Password;