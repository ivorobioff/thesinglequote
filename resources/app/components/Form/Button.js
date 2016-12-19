import React, { Component, PropTypes } from 'react';
import { BOOTSTRAP_COLOR_SCHEMAS } from '../../helpers';

class Button extends Component {
    render() {

        var className = 'btn btn-block';

        if (this.props.color){
            className +=' btn-' + this.props.color;
        }

        var attributes = {
            className,
            type: this.props.type
        };

        if (this.props.disabled){
            attributes.disabled = 'disabled';
        }
        return <button {...attributes}>{this.props.children}</button>
    }
}

Button.propTypes = {
    color: PropTypes.oneOf(BOOTSTRAP_COLOR_SCHEMAS),
    disabled: PropTypes.bool
}

Button.defaultProps = {
    disabled: false
}

export default Button;