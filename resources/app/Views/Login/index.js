import { View } from 'sparrow-ui';
import Form from '../Form';
import Session from '../../Providers/Session';
import page from 'page';

class Login extends View {

    showAlert(text, color){

        this.removeAlert();

        this.alert = $('<div/>', {
            'class': 'alert alert-' + color
        });

        this.alert.text(text);
        
        this.el.find('#formsHolder').prepend(this.alert);
    }

    removeAlert(){
        if (this.alert){
            this.alert.remove();
        }
    }

    render(){
        var el = $(`
            <div class="container">
                    <hr />
                    <div id="login-overlay" class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">Login to <b>TheSingleQuote.com</b></h4> or go back to our <a href="www.thesinglequote.com">main site</a>.
                        </div>
                        <div id="formsHolder" class="modal-body">
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
                </div>
            </div>
        `);

        this.el = el;
        
        var signIn = new Form({method: 'POST', url: '/sessions'});
        
        signIn
            .addEmail('username', { label: 'Email', placeholder: 'Email' , required: true, alias: 'credentials'})
            .addPassword('password', { label: 'Password', placeholder: 'Password', required: true})
            .addSubmit('Login', { color: 'success', isBlock: true});

        el.find('#signIn').html(signIn.render());

        var signUp = new Form({ method: 'POST', url: '/agents'}, { resetOnSuccess: true});

        signUp
            .addInput('fullName', { label: 'Full Name', placeholder: 'Full Name', required: true})
            .addEmail('email', { label: 'Email', placeholder: 'Email', required: true})
            .addPassword('password', { label: 'Password', placeholder: 'Password', required: true})
            .addInput('insuranceLicenseNumber', { label: 'Insurance License #', placeholder: 'A123456', required: true})
            .addCheckbox('agreeToTOS', {label: 'I agree to the TOS', required: true})
            .addSubmit('Register', {color: 'warning', isBlock: true});

        signUp.setOnComplete(() => this.removeAlert() );
        signUp.setOnSuccess(() => this.showAlert('The agent has been successfully registered!', 'success'));
        signUp.setOnGlobalError(e => this.showAlert(e, 'danger'));

        signIn.setOnComplete(() => this.removeAlert() );
        signIn.setOnGlobalError(e => this.showAlert(e, 'danger'));

        signIn.setOnSuccess((data) => {
            Session.set(data);
            page('/');
        });


        el.find('#signUp').html(signUp.render());

        return el;
    }
}

export default Login;