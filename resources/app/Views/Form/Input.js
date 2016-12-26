import Control from './Control';

class Input extends Control {
    constructor(name, options){
        super();
        this.name = name;
        this.options = options;
    }

    getValue(){
        return this.el.val();
    }

    render(){
        var wrapper = $('<div class="form-group"></div>');
        this.wrapper = wrapper;
        var name = this.name;
        var options = this.options;

        if (options.label){
            var label = $('<label></label>');
            label.text(options.label);
            label.attr('for', '_id-' + name);
            label.addClass('control-label');
            wrapper.append(label);
        }

        var control = $('<input />')
            .addClass('form-control')
            .attr('name', name)
            .attr('type', options.type ? options.type : 'text')
            .attr('id', '_id-' + name);


        if (this.options.value){
            control.val(this.options.value);
        }

        this.el = control;

        if (options.placeholder){
            control.attr('placeholder', options.placeholder);
        }

        if (options.required){
            control.attr('required', 'required');
        }

        wrapper.append(control);

        return wrapper
    }
}

export default Input;