import Control from './Control';

class Textarea extends Control {
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

        var control = $('<textarea />', {
            'class': 'form-control',
            name,
            type: options.type ? options.type : 'text',
            id: '_id-' + name,
            cols: options.cols ? options.cols : 40,
            rows: options.rows ? options.rows : 10
        });

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

export default Textarea;