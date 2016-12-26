class Modal {

    constructor(options){
        this.options = options;
    }

    show(){
        var el = this.render();
        
        $('body').append(el);
        
        el.on('hidden.bs.modal', () =>  el.remove());

        el.modal('show');
    }

    hide(){
        this.el.modal('hide');
    }
    
    onCloseClick(){
        this.hide();
    }

    onCancelClick(){
        this.hide();
        if (this.onCancelCallback){
            this.onCancelCallback();
        }
    }

    onSubmitClick(){
        if (this.onSubmitCallback){
            this.onSubmitCallback();
        }
    }

    setOnCancel(callback){
        this.onCancelCallback = callback;
        return this;
    }

    setOnSubmit(callback){
        this.onSubmitCallback = callback;
        return this;
    }

    render(){
        var el = $(`
            <div class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
                <div id="dialog" class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button id="close" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 id="title" class="modal-title"></h4>
                    </div>
                    <div id="body" class="modal-body"></div>
                    <div class="modal-footer">
                        <button id="cancel" type="button" class="btn btn-default">Cancel</button>
                        <button id="submit" type="button" class="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
            </div>
        `);

        this.el = el;

        this.body = el.find('#body').html(this.options.content);
        
        if (this.options.title){
            el.find('#title').text(this.options.title);
        }

        if (this.options.isLarge){
            el.find('#dialog').addClass('modal-lg');
        }

        var close = el.find('#close');
        
        close.click(() => this.onCloseClick());

        var cancel = el.find('#cancel');
        
        if (this.options.cancelButtonTitle){
            cancel.text(this.options.cancelButtonTitle);
        }

        cancel.click(() => this.onCancelClick());
        
        var submit = el.find('#submit');

        if (this.options.submitButtonTitle){
            submit.text(this.options.submitButtonTitle);
        }

        submit.click(() => this.onSubmitClick());

        return el;
    }
}

export default Modal;