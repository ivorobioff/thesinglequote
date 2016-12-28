import Control from './Control';

class Select extends Control {
    
    constructor(name, options){
        super();
        this.name = name;
        this.options = options;
    }

    getValue(){
        return this.el.val();
    }

    setValue(value){
        this.el.val(value);
        return this;
    }

    render() {
        this.wrapper = $('<div class="form-group"></div>');

        if (this.options.label){
            var label = $('<label></label>');
            label.text(this.options.label);
            label.attr('for', '_id-' + name);
            label.addClass('control-label');
            this.wrapper.append(label);
        }
        
        this.el = $(`<select />`)
            .addClass('form-control')
            .attr('name', this.name)
            .attr('id', '_id-' + name);

        this.options.options.forEach(option => {
            this.el.append($('<option/>', { value: option.value, text: option.title }));
        });

        if (typeof this.options.value !== 'undefined'){
            this.setValue(this.options.value);
        }

        if (this.options.required){
            this.el.attr('required', 'required');
        }

        this.wrapper.append(this.el);

        return this.wrapper;
    }
}

export default Select;