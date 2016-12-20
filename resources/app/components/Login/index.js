import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { globalDismissMessage } from '../../actions/global'

class Login extends Component {

    componentWillMount(){
        this.props.dismissMessage();
    }

    render(){
        return <div id="login-overlay" className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="myModalLabel">Login to <b>TheSingleQuote.com</b></h4> or go back to our <a href="www.thesinglequote.com">main site</a>.
                </div>
                 <div className="modal-body">
                    { this.props.message ? <div className={'alert alert-' + this.props.message.color}>{this.props.message.content}</div> : ''}
                     <div className="row">
                        <SignIn />
                        <SignUp />
                    </div>
                 </div>
            </div>
        </div>
    }
}

export default connect(state => {
    return {
        message: state.global.message,
    }
}, dispatch => {
    return {
        dismissMessage: () => dispatch(globalDismissMessage())
    }
})(Login);
