import { View } from 'sparrow-ui';
import QuoteRequests from '../../Providers/QuoteRequests';
import Quote from '../../Providers/Quote';
import QuoteRequestItem from './QuoteRequestItem';
import Pager from '../Pager';
import Form from '../Form';
import Modal from '../Modal';

class QuoteRequestsList extends View {

    onItemProposeQuote(request){
        var form = new Form(data => Quote.store(request.id, data));

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
            .addSelect('plan', { required: true, label: 'Premium is', options: [
                { value: 'per-6-months', title: 'Per 6 Months'},
                { value: 'annual', title: 'Annual'}
            ]})
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
        
    }

    onItemCancelQuote(request){
        Quote.destroy(request.id).done(() => this.pager.load());
    }

    onItemViewDetails(request){

    }

    render(){
        var el = $(`
            <div>
                <table class="table table-striped table-bordered table-list">
                    <thead>
                        <tr>
                            <th>Title</th>
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