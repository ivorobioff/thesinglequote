import { View } from 'sparrow-ui';
import QuoteRequestAction from './QuoteRequestAction';

class QuoteRequestItem extends View {

    constructor(data){
        super();
        this.data = data;
    }

    setOnProposeQuote(callback){
        this.onProposeQuoteCallback = callback;
        return this;
    }

    setOnViewQuote(callback){
        this.onViewQuoteCallback = callback;
        return this;
    }

    setOnCancelQuote(callback){
        this.onCancelQuoteCallback = callback;
        return this;
    }

    setOnViewDetails(callback){
        this.onViewDetailsCallback = callback;
        return this;
    }

    render(){
        var data = this.data;
        
        var el = $(`<tr/>`);
        el.append($('<td/>').text(data.title));
        el.append($('<td/>').text(data.publicMessage));

        var action = new QuoteRequestAction(data);

        action.setOnProposeQuote(this.onProposeQuoteCallback);
        action.setOnCancelQuote(this.onCancelQuoteCallback);
        action.setOnViewQuote(this.onViewQuoteCallback);
        action.setOnViewDetails(this.onViewDetailsCallback);


        el.append($('<td/>').html(action.render()));

        return el;
    }
}

export default QuoteRequestItem;