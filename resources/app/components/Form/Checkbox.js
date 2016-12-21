import React, { PropTypes } from 'react';
import Control from './Control';

class Checkbox extends Control {
    
    constructor(props){
        super(props);
        this.state = { value: props.value};
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

        if (this.hasError()){
            groupClass += ' has-error';
        }

        return <div className={groupClass}>
            <div className="checkbox">
                {input}
                {this.hasError() ? <span className="help-block">{this.getError()}</span>: ''}
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