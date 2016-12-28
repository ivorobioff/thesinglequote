import { View } from 'sparrow-ui';

class Alert extends View {

    constructor(form, options){
        super();
        
        this.form = form;
        form.addOnSuccess(() => this.onSuccess());
        form.addOnGlobalError(error => this.onError(error));

        this.options = options;
    }

    onSuccess(){
        this.el.removeAttr('class').text(this.options.onSuccess).addClass('alert alert-success');
    }

    onError(error){
        this.el.removeAttr('class').text(error).addClass('alert alert-danger');
    }

    render(){
        this.el = $('<div />');
        return this.el;
    }
}

export default Alert;