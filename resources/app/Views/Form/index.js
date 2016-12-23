import { View } from 'sparrow-ui';
import { backend } from '../../Helpers';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';

class Form extends View {
    
     constructor(request){
         super();
         this.request = request;
         this.controls = [];
     }

     addPassword(name, options = {}){
         return this.addInput(name, Object.assign(options, { type: 'password' }));
     }

     addEmail(name, options = {}){
         return this.addInput(name, Object.assign(options, { type: 'email' }));
     }

     addInput(name, options){
        this.controls.push(new Input(name, options));
        return this;
     }

     addSubmit(title, options = {}){
         return this.addButton(Object.assign(options, {title: title, type: 'submit'}));
     }

     addButton(options){
        this.controls.push(new Button(options));
        return this;
     }

     addCheckbox(name, options = {}){

        this.controls.push(new Checkbox(name, options));

        return this;
     }

     addTextarea(name, options = {}){
         return this;
     }

     onSubmit(e){
         e.preventDefault();

         var data = {};

         this.controls.forEach(c => {
             if (c.getValue){
                 data[c.name] = c.getValue();
             }
         });

         var config = this.request;
         config.data = data;

         this.controls.forEach(c => c.disable());

         backend(config)
            .always(() => {
                this.controls.forEach(c => { 
                    c.enable();
                    c.removeError();
                });

                if (this.onCompleteCallback){
                    this.onCompleteCallback();
                }
            })
            .fail(x => {
                var error = 'Unknown error';
                var data = $.parseJSON(x.responseText);

                if (x.status == 422){
                    error = data.errors;
                    this.controls.forEach(c => {
                        if (c.notifyAboutErrors){
                            c.notifyAboutErrors(error)
                        }
                    });
                } else {
                    error = data.message;
                    if (this.onGlobalErrorCallback){
                        this.onGlobalErrorCallback(error);
                    }
                }
            })
            .done(data => {
                if (this.onSuccessCallback){
                    this.onSuccessCallback(data);
                }
            });
     }

     setOnComplete(callback){
        this.onCompleteCallback = callback;
        return this;
     }

     setOnSuccess(callback){
         this.onSuccessCallback = callback;
         return this;
     }

     setOnGlobalError(callback){
         this.onGlobalErrorCallback = callback;
         return this;
     }

    render(){
        var el = $('<form></form>');

        el.submit(e => this.onSubmit(e));

        this.controls.forEach(c => el.append(c.render()));

        return el;
    }
}

export default Form;