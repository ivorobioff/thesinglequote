import { View } from 'sparrow-ui';
import OwnPosts from '../../Providers/OwnPosts';

class OwnPostAction extends View {

    constructor(data){
        super();
        this.data = data;
    }

    onEditClick(e){
        e.preventDefault();
    }

    onDeleteClick(e){
        e.preventDefault();
        OwnPosts.destroy(this.data.id).done(() => {
            if (this.onDeleteCallback){
                this.onDeleteCallback();
            }
        });
    }

    setOnDelete(callback){
        this.onDeleteCallback = callback;
        return this;
    }

    onShareClick(e){
        e.preventDefault();
    }

    render(){
        var data = this.data;
        var el = $(`
            <div class="btn-group">
            <button id="statusButton" type="button" class="btn"></button>
            <button id="statusCaret"  type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
            </button>
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
        
        el.find('#statusButton').addClass('btn-' + status.color).text(status.text);
        el.find('#statusCaret').addClass('btn-' + status.color);
        
        el.find('#editAction').click(e => this.onEditClick(e));
        el.find('#deleteAction').click(e => this.onDeleteClick(e));
        el.find('#shareAction').click(e => this.onShareClick(e));

        return el;
    }
}

export default OwnPostAction;