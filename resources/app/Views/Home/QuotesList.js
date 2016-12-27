import { View } from 'sparrow-ui';
import Quotes from '../../Providers/Quotes';
import QuotesItem from './QuoteItem';

class QuotesList extends View {

    constructor(data){
        super();
        this.data = data;
    }

    onItemPick(quote){

        if (quote.isPicked){
            var promise = Quotes.unpick(this.data.id, quote.id);
        } else {
            var promise = Quotes.pick(this.data.id, quote.id);
        }

        promise.done(() => {
            this.load();
            if (this.onItemPickCallback){
                this.onItemPickCallback();
            }
        });
    }

    setOnItemPick(callback) {
        this.onItemPickCallback = callback;
        return this;
    }

    load(){
        Quotes.load(this.data.id).done(data => {
            this.el.empty();
            var c = 0;
            var total = data.data.length;
            data.data.forEach(quote => {
                c ++;
                var item = new QuotesItem(quote);
                item.setOnPick(() => this.onItemPick(quote));
                this.el.append(item.render());
                
                if (c < total){
                    this.el.append('<hr/>');
                }
            });
        });
    }

    render(){
        this.el = $('<div/>');

        this.load();

        return this.el;
    }
}

export default QuotesList;