import { View } from 'sparrow-ui';

class Control extends View {
    
    disable(){
        this.el.attr('disabled', 'disabled');
    }

    enable(){
        this.el.removeAttr('disabled');
    }

    removeError(){
        if (this.error){
            this.error.remove();
            this.wrapper.removeClass('has-error');
        }
    }

    notifyAboutErrors(errors){
        var error = errors[this.name];

        if (!error){
            if (this.options.alias){
                error = errors[this.options.alias];
            }

            if (!error){ 
                return ; 
            }
        }

        this.error = $('<span class="help-block"></span>');
        this.wrapper.addClass('has-error').append(this.error.text(error.message));
    }
}

export default Control;