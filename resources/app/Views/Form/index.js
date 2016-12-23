import { View } from 'sparrow-ui';

class Form extends View {
    
     constructor(request){
         super();
         this.request = request;
         this.controls = [];
     }

     addPassword(name, options = {}){
         return this.addInput(name, Object.assign(options, { type: 'password' }));
     }

     addEmail(name, options = {}){
         return this.addInput(name, Object.assign(options, { type: 'email' }));
     }

     addInput(name, options){
        var wrapper = $('<div class="form-group"></div>');

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

        if (options.placeholder){
            control.attr('placeholder', options.placeholder);
        }

        wrapper.append(control);
        
        this.controls.push({wrapper, control});

        return this;
     }

     addSubmit(title, options = {}){
         return this.addButton(Object.assign(options, {title: title, type: 'submit'}));
     }

     addButton(options){
        var wrapper = $('<div class="form-group"><div></div></div>');

        var control = $('<button></button>');
        control.text(options.title).attr('type', options.type).addClass('btn');

        if (options.color){
            control.addClass('btn-' + options.color);
        } else {
            control.addClass('btn-default');
        }

        if (options.isBlock){
            control.addClass('btn-block');
        }

        wrapper.find('div:first-child').html(control);

        this.controls.push({ wrapper, control });
        return this;
     }

     addCheckbox(name, options = {}){
        var wrapper = $('<div class="form-group"><div class="checkbox"></div></div>');

        var checkbox = $('<input />', { type: 'checkbox', name });
        var control = checkbox;

        if (options.label){
            checkbox = $('<label></label>').text(options.label).prepend(checkbox);
        }

        wrapper.find('div:first-child').html(checkbox);

        this.controls.push({wrapper, control});

        return this;
     }

     addTextarea(name, options = {}){
         return this;
     }

    render(){
        var el = $('<form></form>');

        this.controls.forEach(c => el.append(c.wrapper));

        return el;
    }
}

export default Form;