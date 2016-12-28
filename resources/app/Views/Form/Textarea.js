import Control from './Control';

class Textarea extends Control {
    constructor(name, options){
        super();
        this.name = name;
        this.options = options;
    }

    getValue(){
        var value = this.el.val();

        if (value === ''){
            return null;
        }

        return value;
    }

    setValue(value){
        this.el.val(value);
        return this;
    }

    render(){
        this.wrapper = $('<div class="form-group"></div>');

        if (this.options.label){
            var label = $('<label></label>');
            label.text(this.options.label);
            label.attr('for', '_id-' + this.name);
            label.addClass('control-label');
            this.wrapper.append(label);
        }

        this.el = $('<textarea />', {
            'class': 'form-control',
            name: this.name,
            type: this.options.type ? this.options.type : 'text',
            id: '_id-' + this.name,
            cols: this.options.cols ? this.options.cols : undefined,
            rows: this.options.rows ? this.options.rows : undefined
        });

        if (typeof this.options.value !== 'undefined'){
            this.setValue(this.options.value);
        }

        if (this.options.placeholder){
            this.el.attr('placeholder', this.options.placeholder);
        }
        
        if (this.options.required){
            this.el.attr('required', 'required');
        }
        
        this.wrapper.append(this.el);

        return this.wrapper
    }
}

export default Textarea;