import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { sessionDestroy } from  '../../actions/auth';

class AgentNav extends Component {

    onClick(e){
        e.preventDefault();
        this.props.logout();
    }

    render(){
        return  <ul className="nav navbar-nav">
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/posts/new">Post a Quote</Link>
            </li>
             <li>
                <a href="#" onClick={e => this.onClick(e)}>Log Out</a>
            </li>
        </ul>
    }
}

export default connect(undefined, dispatch => {
    return {
        logout: () => dispatch(sessionDestroy())
    }
})(AgentNav);