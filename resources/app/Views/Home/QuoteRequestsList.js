import { View } from 'sparrow-ui';
import QuoteRequests from '../../Providers/QuoteRequests';
import Quote from '../../Providers/Quote';
import QuoteRequestItem from './QuoteRequestItem';
import Pager from '../Pager';
import Form from '../Form';
import Modal from '../Modal';
import { PLANS } from '../../Constants';


class QuoteRequestsList extends View {

    onItemProposeQuote(request){
        var form = new Form(data => Quote.store(request.id, data));

        var plans = [];

        for (var v in PLANS){
            plans.push({
                value: v,
                title: PLANS[v]
            });
        }

        form
            .addContent($('<div/>').addClass('well').text(request.publicMessage))
            .addNumber('price', { 
                label: 'Premium',
                placeholder: '99.99', 
                required: true, 
                icon: { sign: '$', position: 'left'},
                cast: 'float',
                step: 0.01
            })
            .addSelect('plan', { required: true, label: 'Premium is', options: plans})
            .addTextarea('note', { label: 'Note', rows: 5})
            .addNumber('commission', {
                label: 'Commission',
                placeholder: '30',
                required: true,
                icon: { sign: '%', position: 'right'}
            })
            .addUpload('document', { label: 'Upload Document'});

        var modal = new Modal({ content: form.render(), title: 'Propose a Quote'});
       
        modal.setOnSubmit(() => form.submit());

        form.addOnSuccess(() => {
            this.pager.load();
            modal.hide();
        });

        modal.show();
    }

    onItemViewQuote(request){
        var content = $(`<div>
            <div class="row">
                <div class="col-xs-4"><b>Premium:</b></div>
                <div id="price" class="col-xs-8"></div>
            </div>
            <div class="row">
                <div class="col-xs-4"><b>Plan:</b></div>
                <div id="plan" class="col-xs-8"></div>
            </div>
            <div class="row">
                <div class="col-xs-4"><b>Note:</b></div>
                <div id="note" class="col-xs-8"></div>
            </div>
            <div class="row">
                <div class="col-xs-4"><b>Commission:</b></div>
                <div id="commission" class="col-xs-8">20%</div>
            </div>
            <div class="row">
                <div class="col-xs-4"><b>Document:</b></div>
                <div id="document" class="col-xs-8"></div>
            </div>
        </div>`);

        var quote = request.quote;
    
        content.find('#price').text('$' + quote.price);
        content.find('#plan').text(PLANS[quote.plan]);
        content.find('#note').text(quote.note);
        content.find('#commission').text(quote.commission + '%');
        content.find('#document').html($('<a/>', { href: quote.document.url, text: quote.document.name }));        

        var modal = new Modal({
            content,
            title: 'View My Qoute',
            hideSubmitButton: true,
            cancelButtonTitle: 'OK' 
        });

        modal.show();
    }

    onItemCancelQuote(request){
        var modal = new Modal({ 
            content: '<p>Do you want to cancel this quote?</p>', 
            title: 'Action',
            submitButtonTitle: 'Yes',
            cancelButtonTitle: 'No' 
        });

        modal.setOnSubmit(() => {
            Quote.destroy(request.id).done(() => this.pager.load());
            modal.hide();
        });

        modal.show();
    }

    onItemViewDetails(request){

        var content = $(`
            <div>
                <h4>Public Information</h4>
                 <div class="row mrg-btm-sm">
                    <div class="col-xs-4"><b>Title:</b></div>
                    <div id="title" class="col-xs-8"></div>
                </div>
                <div class="row mrg-btm-sm">
                    <div class="col-xs-4"><b> Public Message:</b></div>
                    <div id="publicMessage" class="col-xs-8"></div>
                </div>
                <hr/>
                <h4>Private Information</h4>
                <div class="row mrg-btm-sm">
                    <div class="col-xs-4"><b>Client Name:</b></div>
                    <div id="clientName" class="col-xs-8"></div>
                </div>
                <div class="row mrg-btm-sm">
                    <div class="col-xs-4"><b>Client Phone:</b></div>
                    <div id="clientPhone" class="col-xs-8"></div>
                </div>
                <div class="row">
                    <div class="col-xs-4"><b>Private Message:</b></div>
                    <div id="privateMessage" class="col-xs-8"></div>
                </div>
            </div>
        `);


        content.find('#title').text(request.title);
        content.find('#publicMessage').text(request.publicMessage);
        content.find('#clientName').text(request.clientName);
        content.find('#clientPhone').text(request.clientPhone);
        content.find('#privateMessage').text(request.privateMessage);

        var modal = new Modal({
            content,
            title: 'View All Details',
            hideSubmitButton: true,
            cancelButtonTitle: 'OK' 
        });

        modal.show();
    }

    render(){
        var el = $(`
            <div>
                <table class="table table-striped table-bordered table-list">
                    <thead>
                        <tr>
                            <th style="min-width: 350px;">Title</th>
                            <th>Public Message</th>
                            <th style="min-width: 130px;">Status / Actions</th>
                        </tr> 
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        `);

        this.container = el.find('tbody');
        
        this.pager = new Pager(page => QuoteRequests.load(page));

        this.pager.addOnLoad(data => {
            
            this.container.empty();

            data.forEach(request => {

                var item = new QuoteRequestItem(request);

                item.setOnProposeQuote(() => this.onItemProposeQuote(request));
                item.setOnCancelQuote(() => this.onItemCancelQuote(request));
                item.setOnViewQuote(() => this.onItemViewQuote(request));
                item.setOnViewDetails(() => this.onItemViewDetails(request));

                this.container.append(item.render());
            });
        });

        el.append(this.pager.render());

        this.pager.load();

        return el;
    }
}


export default QuoteRequestsList;