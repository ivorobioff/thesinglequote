import React, { Component } from 'react';
import Form from '../Form';
import Email from '../Form/Email';
import Password from '../Form/Password';
import Submit from '../Form/Submit';
import Input from '../Form/Input';
import Checkbox from '../Form/Checkbox';
import { connect } from 'react-redux';

class SignUp extends Component {
    render(){
        return <div className="col-xs-6"><div className="well">
            <Form 
                name="signUp" 
                request={{ method: 'POST', url: '/agents' }} 
                purge={this.props.form.status === 'success'}>
                
                    <Input 
                        label="Full Name" 
                        name="fullName" 
                        required={true}
                        placeholder="Brian Abbott" />
                        
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

                    <Input 
                        label="Insurance License #" 
                        name="insuranceLicenseNumber" 
                        required={true}
                        placeholder="A123456" />

                    <Checkbox name="agreeToTOS" required={true} label="I agree to the TOS" />

                    <Submit position="block" color="warning">Register</Submit>
            </Form>
        </div></div>
    }
}

SignUp.defaultProps = {
    form: {}
}

export default connect(state => {
    return {
        form: state.forms.signUp
    }
})(SignUp);