import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form';
import Email from '../Form/Email';
import Password from '../Form/Password';
import Submit from '../Form/Submit';

class SignIn extends Component {
    
    render(){
        return <div className="col-xs-6"><div className="well">
            <Form name="signIn" request={{ method: 'POST', url: '/sessions' }}>
                    <Email 
                        label="Email" 
                        name="username" 
                        alias="credentials"
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

export default SignIn;