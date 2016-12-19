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

    hasError(){        
        return this.getError() !== null;
    }

    getError(){
        if (typeof this.props.errors[this.props.name] !== 'undefined'){
            return this.props.errors[this.props.name].message;
        }

        if (this.props.alias && typeof this.props.errors[this.props.alias] !== 'undefined'){
            return this.props.errors[this.props.alias].message;
        }

        return null;
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

        var groupClass = 'form-group'

        if (this.hasError()){
            groupClass += ' has-error';
        }

        return <div className={groupClass}>
            { this.props.label ? <label htmlFor={'_id-' + this.props.name}>{this.props.label}</label> : ''}
            <input {...attributes} />
            {this.hasError() ? <span className="help-block">{this.getError()}</span>: ''}
        </div>;
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    alias: PropTypes.string,
    type: PropTypes.oneOf(['password', 'email', 'text']).isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    errors: PropTypes.object
}

Input.defaultProps = {
    required: false,
    type: 'text',
    disabled: false,
    errors: {}
}

export default Input;