import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { formReset } from '../../actions/form'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillMount(){
        this.props.reset();
    }

    componentWillReceiveProps(newProps){
        var oldSignIn = this.props.formSignIn;
        var oldSignUp = this.props.formSignUp;

        var newSignIn = newProps.formSignIn;
        var newSignUp = newProps.formSignUp;

        if (oldSignIn.status !== newSignIn.status){
            if (newSignIn.status === 'fail' && typeof newSignIn.error === 'string'){
                this.state = { message: { content: newSignIn.error, color: 'danger'}};
            }
        } else if (oldSignUp.status !== newSignUp.status){
            if (newSignUp.status === 'fail' && typeof newSignUp.error === 'string'){
                this.state = { message: { content: newSignUp.error, color: 'danger'}};
            } else if (newSignUp.status === 'success'){
                this.state = { message: { content: 'The agent has been registered successfully!', color: 'success'}};   
            }
        }
    }

    render(){
        return <div id="login-overlay" className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="myModalLabel">Login to <b>TheSingleQuote.com</b></h4> or go back to our <a href="www.thesinglequote.com">main site</a>.
                </div>
                 <div className="modal-body">
                    { this.state.message ? <div className={'alert alert-' + this.state.message.color}>{this.state.message.content}</div> : ''}
                     <div className="row">
                        <SignIn />
                        <SignUp />
                    </div>
                 </div>
            </div>
        </div>
    }
}

Login.defaultProps = {
    formSignIn: { status: 'none' },
    formSignUp: { status: 'none' }
}

export default connect(state => {
    return {
        formSignIn: state.forms.signIn,
        formSignUp: state.forms.signUp
    }
}, dispatch => {
    return {
        reset: () => dispatch(formReset(['signIn', 'signUp']))
    }
})(Login);
