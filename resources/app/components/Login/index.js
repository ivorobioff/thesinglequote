import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Login extends Component {

    getGlobalError(){
        if (this.props.signInForm && typeof this.props.signInForm.error === 'string'){
            return this.props.signInForm.error;
        }

        if (this.props.signUpForm && typeof this.props.signUpForm.error === 'string'){
            return this.props.signUpForm.error;
        }
        
        return null;
    }

    hasGlobalError(){
        return this.getGlobalError() !== null;
    }

    render(){
        return <div id="login-overlay" className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="myModalLabel">Login to <b>TheSingleQuote.com</b></h4> or go back to our <a href="www.thesinglequote.com">main site</a>.
                </div>
                 <div className="modal-body">
                    {this.hasGlobalError() ? <div className="alert alert-danger">{this.getGlobalError()}</div> : ''}
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
        signInForm: state.forms.signIn,
        signUpForm: state.forms.signUp
    }
})(Login);
