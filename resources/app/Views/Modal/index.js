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
                    <div id="buttons" class="modal-footer">
                        
                    </div>
                    </div>
                </div>
            </div>
        `);

        this.el = el;
        
        if (this.options.title){
            el.find('#title').text(this.options.title);
        }

        if (this.options.isLarge){
            el.find('#dialog').addClass('modal-lg');
        }

        var close = el.find('#close');
        
        close.click(() => this.onCloseClick());

        var buttons = el.find('#buttons');

        var cancel = $('<button/>', {
            'class': 'btn btn-default',
            text: this.options.cancelButtonTitle ? this.options.cancelButtonTitle : 'Cancel',
            type: 'button'
        });
    
        cancel.click(() => this.onCancelClick());

        buttons.append(cancel);
        
        if (!this.options.hideSubmitButton){
            var submit = $('<button/>', {
                'class': 'btn btn-primary',
                text: this.options.submitButtonTitle ? this.options.submitButtonTitle : 'Submit',
                type: 'button'
            });

            submit.click(() => this.onSubmitClick());

            buttons.append(submit);
        }

        // this must be in the very end so that ids in the content don't conflicts with ids of the modal 
        
        this.body = el.find('#body').html(this.options.content);

        return el;
    }
}

export default Modal;