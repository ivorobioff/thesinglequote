import { View } from 'sparrow-ui';
import OwnPostAction from './OwnPostAction';

class OwnPostItem extends View {

    constructor(data){
        super();
        this.data = data;
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
        var el = $(`<tr/>`);
        el.append($('<td/>').text(data.id));
        el.append($('<td/>').text(data.clientName));
        el.append($('<td/>').text(data.publicMessage));

        var ownPostAction = new OwnPostAction(data);
        
        ownPostAction
            .setOnDelete(() => this.onDeleteCallback())
            .setOnEdit(() => this.onEditCallback())
            .setOnShare(() => this.onShareCallback());

        el.append($('<td/>').html(ownPostAction.render()));

        return el;
    }
}

export default OwnPostItem;