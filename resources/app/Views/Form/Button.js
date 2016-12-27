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
        this.wrapper = $('<div class="form-group"><div></div></div>');

        this.el = $('<button></button>');
        
        this.el.text(this.options.title).attr('type', this.options.type).addClass('btn');

        if (this.options.color){
            this.el.addClass('btn-' + this.options.color);
        } else {
            this.el.addClass('btn-default');
        }

        if (this.options.isBlock){
            this.el.addClass('btn-block');
        }

        this.wrapper.find('div:first-child').html(this.el);

        return this.wrapper;
    }
}

export default Button;