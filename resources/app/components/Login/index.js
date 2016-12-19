import React, { Component, PropTypes } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Login extends Component {
    
    getFormError(){
        return this.props.session.error;
    }

    getFieldError(field){
        return null;
    }

    render(){
        return <div id="login-overlay" className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="myModalLabel">Login to <b>TheSingleQuote.com</b></h4> or go back to our <a href="www.thesinglequote.com">main site</a>.
                </div>
                 <div className="modal-body">
                    <div className="row">
                        <SignIn />
                        <SignUp />
                    </div>
                 </div>
            </div>
        </div>
    }
}

export default Login;
