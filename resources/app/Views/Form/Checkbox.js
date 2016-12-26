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
        var name = this.name;
        var options = this.options;

        var wrapper = $('<div class="form-group"><div class="checkbox"></div></div>');
        this.wrapper = wrapper;
        var control = $('<input />', { type: 'checkbox', name });

        if (this.options.value){
            control.prop('checked', 'checked');
        }


        if (options.required){
            control.attr('required', 'required');
        }

        this.el = control;

        if (options.label){
            control = $('<label></label>').text(options.label).prepend(control);
        }

        wrapper.find('div:first-child').html(control);

        return wrapper;
    }
}

export default Checkbox;