import Control from './Control';

class Checkbox extends Control {

    constructor(name, options = {}){
        super();
        this.options = options;
        this.name = name;
    }

    getValue(){
        return this.el.prop('checked') ? true : false;
    }

    render(){
        this.wrapper = $('<div class="form-group"><div class="checkbox"></div></div>');
        this.el = $('<input />', { type: 'checkbox', name: this.name });

        if (this.options.value){
            this.el.prop('checked', 'checked');
        }


        if (this.options.required){
            this.el.attr('required', 'required');
        }

        if (this.options.label){
            this.el = $('<label></label>').text(this.options.label).prepend(this.el);
        }

        this.wrapper.find('div:first-child').html(this.el);

        return this.wrapper;
    }
}

export default Checkbox;