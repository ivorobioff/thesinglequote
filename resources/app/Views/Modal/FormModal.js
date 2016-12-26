import Modal from './';

class FormModal {

    constructor(options){
        var form = options.form;
        options.content = form.render();        
        this.modal = new Modal(options);
        this.modal.setOnSubmit(() => form.submit());
    }
    
    show(){
        this.modal.show();
    }
}

export default FormModal;