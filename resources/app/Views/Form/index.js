import { View } from 'sparrow-ui';
import { backend } from '../../Helpers';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import Textarea from './Textarea';
import Control from './Control';
import Content from './Content';
import Alert from './Alert';
import Select from './Select';
import Upload from './Upload';

class Form extends View {
    
     constructor(request, options = {}){
         super();
         this.request = request;
         this.options = options;
         this.controls = [];
         this.onSuccessCallbacks = [];
         this.onGlobalErrorCallbacks = [];
         this.onCompleteCallbacks = [];
         this.filters = {};
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

     addNumber(name, options){
         return this.addInput(name, Object.assign({ cast: 'int', step: 1}, options, { type: 'number' }));
     }

     addUpload(name, options){
        this.controls.push(new Upload(this, name, options));
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

     addContent(content){
         this.controls.push(new Content(content));
         return this;
     }

     addTextarea(name, options = {}){
         this.controls.push(new Textarea(name, options));
         return this;
     }

     addAlert(options){
         this.controls.push(new Alert(this, options));
         return this;
     }

     addSelect(name, options = {}){
         this.controls.push(new Select(name, options));
         return this;
     }

     onSubmit(e){
        e.preventDefault();

        var data = {};

        this.controls.forEach(c => {
            if (c.getValue){
                var isAllowed = true;

                var value = c.getValue();

                if (this.filters[c.name]){
                    isAllowed = this.filters[c.name](value);
                }

                if (isAllowed){
                    data[c.name] = value;
                }
            }
        });

        if (typeof this.request === 'function'){
            var promise = this.request(data);
        } else {
            var config = this.request;
            config.data = data;
            var promise = backend(config);
        }

        this.disable();

        promise.always(() => {
            this.enable();

            this.controls.forEach(c => { 
                if (c instanceof Control){
                    c.removeError();
                }
            });

            this.onCompleteCallbacks.forEach(callback => callback());
        })
        .fail(x => {
            var error = 'Unknown error';
            var data = $.parseJSON(x.responseText);

            if (x.status == 422){
                error = data.errors;
                this.controls.forEach(c => {
                    if (c instanceof Control){
                        c.notifyAboutErrors(error)
                    }
                });
            } else {
                error = data.message;
                this.onGlobalErrorCallbacks.forEach(callback => callback(error));
            }
        })
        .done(data => {
            if (this.options.resetOnSuccess){
                this.el[0].reset();
            }

            if (this.options.messageOnSuccess){

            }

            this.onSuccessCallbacks.forEach(callback => callback(data));
        });
     }

     addOnComplete(callback){
        this.onCompleteCallbacks.push(callback);
        return this;
     }

     addOnSuccess(callback){
         this.onSuccessCallbacks.push(callback);
         return this;
     }

     addOnGlobalError(callback){
         this.onGlobalErrorCallbacks.push(callback);
         return this;
     }

     submit(){
         var submit = this.el.find('[type="submit"]');
         
         if (submit.length == 0){
             submit = $('<input type="submit" style="display: none" />');
             this.el.append(submit);
         }
         
         submit.click();
     }

     enable(){
         this.controls.forEach(c =>  {
            if (c instanceof Control){
                c.enable()
            }
        });
     }

     disable(){
        this.controls.forEach(c =>  {
            if (c instanceof Control){
                c.disable()
            }
        });
     }

     populate(data){
         this.controls.forEach(c =>  {
            if (c instanceof Control){
                if (c.name && c.setValue && data[c.name]){
                    c.setValue(data[c.name]);
                }
            }
        });
     }

     addFilter(field, callback){
         this.filters[field] = callback;
         return this;
     }
     
    render(){
        var el = $('<form></form>');
        this.el = el;

        el.submit(e => this.onSubmit(e));

        this.controls.forEach(c => el.append(c.render()));

        return el;
    }
}

export default Form;