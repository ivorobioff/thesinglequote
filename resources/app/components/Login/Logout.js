import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sessionDestroy } from  '../../actions/auth';

class Logout extends Component {

    onClick(e){
        e.preventDefault();
        this.props.logout();
    }

    render(){
        return <li>
            <a href="#" onClick={e => this.onClick(e)}>Log Out</a>
        </li>
    }
}

export default connect(undefined, dispatch => {
    return {
        logout: () => dispatch(sessionDestroy())
    }
})(Logout);