import { View } from 'sparrow-ui';
import OwnPosts from '../../Providers/OwnPosts';

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
                <ul class="dropdown-menu">
                    <li><a href="#" id="editAction">Edit</a></li>
                    <li><a href="#" id="deleteAction">Delete</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#" id="shareAction">Share</a></li>
                </ul>
            </div>
        `);

        var status = {
            done: {
                text: 'Done!',
                color: 'success'
            },
            open: {
                text: 'Waiting',
                color: 'default'
            }
        }[data.status];
        
        el.find('#statusButton')
            .addClass('btn-' + status.color)
            .text(status.text + ' ')
            .append(`<span class="caret"></span>`);
        
        el.find('#editAction').click(e => this.onEditClick(e));
        el.find('#deleteAction').click(e => this.onDeleteClick(e));
        el.find('#shareAction').click(e => this.onShareClick(e));

        return el;
    }
}

export default OwnPostAction;