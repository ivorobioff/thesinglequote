import React, { PropTypes } from 'react';
import Control from './Control';

class Checkbox extends Control {
    
    render(){
        var attributes = {
            id: '_id-' + this.props.name,
            ref: el => this.el = el,
            name: this.props.name,
        };

        if (this.props.disabled){
            attributes.disabled = 'disabled';
        }

        if (this.props.required){
            attributes.required = 'required';
        }

        var input = <input checked={this.state.value} onChange={e => this.setState({value: e.target.checked ? true : false})} type="checkbox"  {...attributes} />;

        if (this.props.label){
            input = <label>{input} {this.props.label}</label>
        }

        var groupClass = 'form-group'

        if (this.state.error){
            groupClass += ' has-error';
        }

        return <div className={groupClass}>
            <div className="checkbox">
                {input}
                {this.state.error ? <span className="help-block">{this.state.error}</span>: ''}
            </div>
        </div>
    }
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    alias: PropTypes.string,
    required: PropTypes.bool,
    purge: PropTypes.bool,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    errors: PropTypes.object
}

Checkbox.defaultProps = {
    required: false,
    purge: false,
    disabled: false,
    value: false,
    errors: {}
}

export default Checkbox;