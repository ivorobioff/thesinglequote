import React, { Component } from 'react';

class Control extends Component {
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
}

export default Control;