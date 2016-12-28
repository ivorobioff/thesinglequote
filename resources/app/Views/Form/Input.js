import Control from './Control';

class Input extends Control {
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

        if (this.options.cast === 'float'){
            return parseFloat(value);
        }

        if (this.options.cast === 'int'){
            return parseInt(value);
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

        this.el = $('<input />')
            .addClass('form-control')
            .attr('name', this.name)
            .attr('type', this.options.type ? this.options.type : 'text')
            .attr('id', '_id-' + this.name);

        if (this.options.step){
            this.el.attr('step', this.options.step);
        }

        var controlHolder = this.el;

        if (this.options.icon){
            var iconWrapper = $('<div/>').addClass('input-group');
            var icon = $('<div/>').addClass('input-group-addon').text(this.options.icon.sign);

            if (this.options.icon.position === 'left'){
                iconWrapper.append(icon);
                iconWrapper.append(this.el);
            } else {
                iconWrapper.append(this.el);
                iconWrapper.append(icon);
            }

            controlHolder = iconWrapper;
        }

        if (typeof this.options.value !== 'undefined'){
            this.setValue(this.options.value);
        }

        if (this.options.placeholder){
            this.el.attr('placeholder', this.options.placeholder);
        }

        if (this.options.required){
            this.el.attr('required', 'required');
        }

        this.wrapper.append(controlHolder);

        return this.wrapper
    }
}

export default Input;