import React, { Component } from 'react';

class Control extends Component {
   
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

        if (this.props.errors[this.props.name] !== newProps.errors[this.props.name]){
            var error = newProps.errors[this.props.name];
            this.state = Object.assign({}, this.state, { error: error ? error.message : error });
        }

        if (this.props.alias && this.props.errors[this.props.alias] !== newProps.errors[this.props.alias]){
            var error = newProps.errors[this.props.alias];
            this.state = Object.assign({}, this.state, { error: error ? error.message : error });
        }
    }
}

export default Control;