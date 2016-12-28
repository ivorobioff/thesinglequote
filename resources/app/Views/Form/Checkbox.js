import Control from './Control';

class Checkbox extends Control {

    constructor(name, options = {}){
        super();
        this.options = options;
        this.name = name;
    }

    getValue(){
        return this.el.prop('checked');
    }

    setValue(value){
        this.el.prop('checked', value);
        return this;
    }

    render(){
        this.wrapper = $('<div class="form-group"><div class="checkbox"></div></div>');
        this.el = $('<input />', { type: 'checkbox', name: this.name });
        
        if (typeof this.options.value !== 'undefined'){
            this.setValue(this.options.value);
        }

        if (this.options.required){
            this.el.attr('required', 'required');
        }

        var control  = this.el;

        if (this.options.label){
            control = $('<label></label>').text(this.options.label).prepend(this.el);
        }

        this.wrapper.find('div:first-child').html(control);

        return this.wrapper;
    }
}

export default Checkbox;