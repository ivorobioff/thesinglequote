import Control from './Control';

class Button extends Control {

    constructor(options){
        super();
        this.options = options;
    }

    notifyAboutErrors(){
        return ;
    }
    
    render(){
        var options = this.options;

        var wrapper = $('<div class="form-group"><div></div></div>');

        var control = $('<button></button>');
        this.el = control;
        
        control.text(options.title).attr('type', options.type).addClass('btn');

        if (options.color){
            control.addClass('btn-' + options.color);
        } else {
            control.addClass('btn-default');
        }

        if (options.isBlock){
            control.addClass('btn-block');
        }

        wrapper.find('div:first-child').html(control);

        return wrapper;
    }
}

export default Button;