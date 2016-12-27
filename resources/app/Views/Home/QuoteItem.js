import { View } from 'sparrow-ui';
import { PLANS } from '../../Constants';

class QuotesItem extends View {

    constructor(data){
        super();
        this.data = data;
    }

    setOnPick(callback){
        this.onPickCallback = callback;
        return this;
    }

    render(){
        this.el = $(`
            <div class="row">
                <div class="col-xs-10">
                    <div class="row">
                        <div id="price" class="col-xs-6"></div>
                        <div id="plan" class="col-xs-6"></div>
                    </div>
                    <div class="row">
                        <div id="commission" class="col-xs-6"></div>
                        <div id="document" class="col-xs-6"></div>
                    </div>
                    <div class="row">
                        <div id="note" class="col-xs-12"></div>
                    </div>
                </div>
                <div class="col-xs-2">
                    <button id="selector" class="btn"></button>
                </div>
            </div>
        `);
        
        var selector = this.el.find('#selector');

        if (this.data.isPicked){
            selector.addClass('btn-danger');
            selector.append($('<span/>').addClass('fa fa-check-square-o'));
            selector.append(' Unpick');
        } else {
            selector.addClass('btn-primary');
            selector.append($('<span/>').addClass('fa fa-square-o'));
            selector.append(' Pick');
        }

        selector.click(() => this.onPickCallback());

        this.el.find('#price').append($('<b/>', { text: 'Premium:'})).append(' $' + this.data.price);
        this.el.find('#plan').append($('<b/>', { text: 'Premium:'})).append(' ' + PLANS[this.data.plan]);
        this.el.find('#commission').append($('<b/>', { text: 'Commission:'})).append(' ' + this.data.commission + '%');
        this.el.find('#document').html($('<a/>', { href: this.data.document.url, text: this.data.document.name }));

        this.el.find('#note').append($('<b/>', { text: 'Note:'})).append(' ' + this.data.note);

        return this.el;
    }
}

export default QuotesItem;