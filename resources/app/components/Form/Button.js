import React, { Component, PropTypes } from 'react';

class Button extends Component {
    render() {
        var className = 'btn btn-' + this.props.color;

        if (this.props.position === 'block'){
            className += ' btn-block';
        }

        var attributes = {
            className,
            type: this.props.type
        };

        if (this.props.disabled){
            attributes.disabled = 'disabled';
        }
        return <div className="form-group"><div><button {...attributes}>{this.props.children}</button></div></div>  
    }
}

Button.propTypes = {
    color: PropTypes.oneOf(['default', 'info', 'success', 'primary', 'warning', 'danger', 'link']),
    disabled: PropTypes.bool,
    position: PropTypes.oneOf(['default', 'block'])
}

Button.defaultProps = {
    disabled: false,
    color: 'default',
    position: 'default'
}

export default Button;