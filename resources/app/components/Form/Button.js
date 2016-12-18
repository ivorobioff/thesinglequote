import React, { Component } from 'react';


export default class Button extends Component {
    render(){
        return <button type={this.props.type}>{this.props.children}</button>
    }
}