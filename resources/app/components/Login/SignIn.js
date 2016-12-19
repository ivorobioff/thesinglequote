import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form';
import Email from '../Form/Email';
import Password from '../Form/Password';
import Submit from '../Form/Submit';

import { sessionSuccess, sessionComplete, sessionFail, sessionStart } from '../../actions/auth';

class SignIn extends Component {
    render(){
        return <div className="col-xs-6"><div className="well">
            <Form 
                lock={this.props.session.loading}
                request={{ method: 'POST', url: '/sessions', session: false}}
                actions={{
                    start: () => sessionStart(),
                    complete: () => sessionComplete(),
                    success: (data) => sessionSuccess(data),
                    fail: (error) => sessionFail(error)
                }}>
                    <Email 
                        label="Email" 
                        name="username" 
                        required={true} 
                        placeholder="Email" />
                        
                    <Password 
                        label="Password" 
                        name="password" 
                        required={true} 
                        placeholder="Password" />

                    <Submit color="success">Login</Submit>
            </Form>
        </div></div>
    }
}


export default connect(state => {
    return {
        session: state.session
    }
})(SignIn);