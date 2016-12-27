import Control from './Control';
import { upload } from '../../Helpers';

class Upload extends Control {

    constructor(form, name, options){
        super();
        this.form = form;
        this.name = name;
        this.options = options;
    }

    onChange(e){
        this.form.disable();
        upload(e.target.files[0])
            .always(() => this.form.enable())
            .done(data => this.data = data);
    }

    getValue(){

        if (!this.data){
            return null;
        }

        return { id: this.data.id, token: this.data.token };
    }

    render(){
        this.wrapper = $(`<div class="form-group"></div>`);

        if (this.options.label){
            var label = $('<label />', { 
                for: '_id-' + this.name, 
                'class': 'control-label', 
                text: this.options.label
            });

            this.wrapper.append(label);
        }

        this.el = $('<input />', { type: 'file', name: this.name, id: '_id-' + this.name });

        this.el.change(e => this.onChange(e));

        this.wrapper.append(this.el);
        
        
        return this.wrapper;
    }
}

export default Upload;