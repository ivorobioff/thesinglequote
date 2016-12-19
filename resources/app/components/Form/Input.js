import React, { Component, PropTypes } from 'react';

class Input extends Component {
    
    componentWillMount(){
        
        var _this = this;

        this.props.registerControl({
            name: this.props.name,
            getValue(){
                return _this.el.value;
            }
        });
    }

    render(){
        var attributes = {
            id: '_id-' + this.props.name,
            ref: el => this.el = el,
            name: this.props.name,
            type: this.props.type,
            value: this.props.value,
            placeholder: this.props.placeholder,
            className: 'form-control'
        };

        if (this.props.disabled){
            attributes.disabled = 'disabled';
        }

        if (this.props.required){
            attributes.required = 'required';
        }

        return <div className="form-group">
            { this.props.label ? <label htmlFor={'_id-' + this.props.name}>{this.props.label}</label> : ''}
            <input {...attributes} />
        </div>;
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['password', 'email', 'text']).isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool
}

Input.defaultProps = {
    required: false,
    type: 'text',
    disabled: false
}

export default Input;