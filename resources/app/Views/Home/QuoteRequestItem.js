import { View } from 'sparrow-ui';
import QuoteRequestAction from './QuoteRequestAction';

class QuoteRequestItem extends View {

    constructor(data){
        super();
        this.data = data;
    }
    

    render(){
        var data = this.data;
        
        var el = $(`<tr/>`);
        el.append($('<td/>').text(data.title));
        el.append($('<td/>').text(data.publicMessage));

        var quoteRequestAction = new QuoteRequestAction(data);

        el.append($('<td/>').html(quoteRequestAction.render()));

        return el;
    }
}

export default QuoteRequestItem;