import { View } from 'sparrow-ui';

import Form from '../Form';

class Login extends View {
    render(){
        var el = $(`<div id="login-overlay" class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Login to <b>TheSingleQuote.com</b></h4> or go back to our <a href="www.thesinglequote.com">main site</a>.
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="well" id="signIn">
                                
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="well" id="signUp">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
        
        var signIn = new Form({method: 'POST', url: '/session'});
        
        signIn
            .addEmail('username', { label: 'Email', placeholder: 'Email'})
            .addPassword('password', { label: 'Password', placeholder: 'Password'})
            .addSubmit('Login', { color: 'success', isBlock: true});

        el.find('#signIn').html(signIn.render());

        var signUp = new Form({ method: 'POST', url: '/agents'});

        signUp
            .addInput('fullName', { label: 'Full Name', placeholder: 'Full Name'})
            .addEmail('email', { label: 'Email', placeholder: 'Email'})
            .addPassword('password', { label: 'Password', placeholder: 'Password'})
            .addInput('insuranceLicenseNumber', { label: 'Insurance License #', placeholder: 'A123456'})
            .addCheckbox('agreeToTOS', {label: 'I agree to the TOS'})
            .addSubmit('Register', {color: 'warning', isBlock: true});

        el.find('#signUp').html(signUp.render());

        return el;
    }
}

export default Login;