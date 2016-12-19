import React, { Component, PropTypes } from 'react';
import Button from './Button';

class Submit extends Component {
    render(){
        return <Button {...this.props} type="submit">{this.props.children}</Button>
    }
}

export default Submit;