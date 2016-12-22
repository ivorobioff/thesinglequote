import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render(){
        return <header className="jumbotron hero-spacer">
        <h1>Welcome back {this.props.session.user.fullName}</h1>
        <p>This page will show quotes. It will also allow them to edit their information.</p>
        <p><a className="btn btn-primary btn-large">Call to action!</a>
        </p>
    </header>

    }
}

export default connect(state => {
    return {
        session: state.session
    }
})(Header);