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
        var input = <input ref={el => this.el = el } name={this.props.name} type={this.props.type} value={this.props.value} />;

        if (this.props.label){
            return <label>{this.props.label} {input}</label>
        }

        return input;
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string
}

export default Input;