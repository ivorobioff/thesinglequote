import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import Email from './Form/Email';
import Password from './Form/Password';
import Submit from './Form/Submit';
import { sessionSuccess, sessionComplete, sessionFail, sessionStart } from '../actions/auth';

class Login extends Component {
    
    getFormError(){
        return this.props.session.error;
    }

    getFieldError(field){
        return null;
    }

    render(){
        return <div>
            <h3>Login</h3>
            <Form error={this.getFormError()}
                request={{method: 'POST', url: '/sessions', session: false}} 
                actions={{
                    start: () => sessionStart(),
                    complete: () => sessionComplete(),
                    success: (data) => sessionSuccess(data),
                    fail: (error) => sessionFail(error)
                }}>
                <Email label="Email:" error={this.getFieldError('username')} name="username" />
                <br/>
                <Password label="Password:" error={this.getFieldError('password')} name="password" />
                <br/>
                <Submit>Sing-in</Submit>
            </Form>
        </div>
    }
}

export default connect((state) => {
    return {
        session: state.session
    }
})(Login);
