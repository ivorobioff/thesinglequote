import React, { PropTypes } from 'react';
import Control from './Control';

class Textarea extends Control {
    
    render(){

        var attributes = {
            id: '_id-' + this.props.name,
            ref: el => this.el = el,
            name: this.props.name,
            value: this.state.value,
            placeholder: this.props.placeholder,
            cols: this.props.cols,
            rows: this.props.rows,
            className: 'form-control'
        };

        if (this.props.disabled){
            attributes.disabled = 'disabled';
        }

        if (this.props.required){
            attributes.required = 'required';
        }

        var groupClass = 'form-group'

        if (this.state.error){
            groupClass += ' has-error';
        }

        return <div className={groupClass}>
            { this.props.label ? <label htmlFor={'_id-' + this.props.name}>{this.props.label}</label> : ''}
            <textarea {...attributes}  onChange={e => this.setState({ value: e.target.value }) }></textarea>
            {this.state.error ? <span className="help-block">{this.state.error}</span>: ''}
        </div>;
    }
}

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
    alias: PropTypes.string,
    required: PropTypes.bool,
    purge: PropTypes.bool,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    errors: PropTypes.object,
    cols: PropTypes.number,
    rows: PropTypes.number
}

Textarea.defaultProps = {
    required: false,
    purge: false,
    disabled: false,
    value: '',
    cols: 20,
    rows: 5,
    errors: {}
}

export default Textarea;