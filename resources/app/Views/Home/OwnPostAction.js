import { View } from 'sparrow-ui';

class OwnPostAction extends View {

    constructor(data){
        super();
        this.data = data;
    }

    onEditClick(e){
        e.preventDefault();

        if (this.onEditCallback){
            this.onEditCallback();
        }
    }

    onDeleteClick(e){
        e.preventDefault();
        
        if (this.onDeleteCallback){
            this.onDeleteCallback();
        }
    }

    onShareClick(e){
        e.preventDefault();

        if (this.onShareCallback){
            this.onShareCallback();
        }
    }

    setOnDelete(callback){
        this.onDeleteCallback = callback;
        return this;
    }

    setOnEdit(callback){
        this.onEditCallback = callback;
        return this;
    }

    setOnShare(callback){
        this.onShareCallback = callback;
        return this;
    }

    render(){
        var data = this.data;
        var el = $(`
            <div class="btn-group">
                <button id="statusButton" type="button"  data-toggle="dropdown" class="btn dropdown-toggle"></button>
                <ul id="menu" class="dropdown-menu"></ul>
            </div>
        `);

        var status = {
            done: {
                name: 'done',
                text: 'Done',
                color: 'success'
            },
            open: {
                name: 'open',
                text: 'Waiting',
                color: 'default'
            },
            active: {
                name: 'active',
                text: 'Active',
                color: 'primary'
            }
        }[data.status];
        
        el.find('#statusButton')
            .addClass('btn-' + status.color)
            .text(status.text + ' ')
            .append(`<span class="caret"></span>`);

        var menu = el.find('#menu');

        var edit = $('<a/>', { href: '#', text: 'Edit' });
        edit.click(e => this.onEditClick(e));
        menu.append($('<li/>').append(edit));

        var del = $('<a/>', { href: '#', text: 'Delete' });
        del.click(e => this.onDeleteClick(e));
        menu.append($('<li/>').append(del));

        if (status.name !== 'open'){
            var share = $('<a/>', { href: '#', text: 'Review Quotes' });
            share.click(e => this.onShareClick(e));
            menu.append($('<li/>', { role: 'separator', 'class': 'divider' }));
            menu.append($('<li/>').append(share));
        }

        return el;
    }
}

export default OwnPostAction;