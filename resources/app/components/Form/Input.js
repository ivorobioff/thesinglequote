import React, { PropTypes } from 'react';
import Control from './Control';

class Input extends Control {
    
    constructor(props){
        super(props);
        this.state = { value: props.value };
        this.initialValue = props.value;
    }

    componentWillMount(){
        
        var _this = this;

        this.props.registerControl({
            name: _this.props.name,
            getValue(){
                return _this.state.value;
            }
        });
    }

    componentWillReceiveProps(newProps) {

        if (this.props.purge !== newProps.purge && newProps.purge === true){
            this.state = { value: this.initialValue };
        }
    }

    render(){

        var attributes = {
            id: '_id-' + this.props.name,
            ref: el => this.el = el,
            name: this.props.name,
            type: this.props.type,
            value: this.state.value,
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
            <input {...attributes}  onChange={e => this.setState({ value: e.target.value }) } />
            {this.hasError() ? <span className="help-block">{this.getError()}</span>: ''}
        </div>;
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    alias: PropTypes.string,
    type: PropTypes.oneOf(['password', 'email', 'text']).isRequired,
    required: PropTypes.bool,
    purge: PropTypes.bool,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    errors: PropTypes.object
}

Input.defaultProps = {
    required: false,
    purge: false,
    type: 'text',
    disabled: false,
    value: '',
    errors: {}
}

export default Input;