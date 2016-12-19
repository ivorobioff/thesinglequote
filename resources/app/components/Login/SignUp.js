import React, { Component } from 'react';
import Form from '../Form';
import Email from '../Form/Email';
import Password from '../Form/Password';
import Submit from '../Form/Submit';
import Input from '../Form/Input';

class SignUp extends Component {
    render(){
        return <div className="col-xs-6"><div className="well">
            <Form name="signUp" request={{ method: 'POST', url: '/agents', session: false}}>
                    <Input 
                        label="Full Name" 
                        name="fullName" 
                        required={true}
                        placeholder="Full Name" />
                    <Email 
                        label="Email:" 
                        name="email" 
                        required={true} 
                        placeholder="Email" />
                        
                    <Password 
                        label="Password:" 
                        name="password" 
                        required={true} 
                        placeholder="Password" />

                    <Submit color="warning">Register</Submit>
            </Form>
        </div></div>
    }
}

export default SignUp;