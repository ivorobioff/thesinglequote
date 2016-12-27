import { View } from 'sparrow-ui';
import OwnPosts from '../../Providers/OwnPosts';
import OwnPostItem from './OwnPostItem';
import { buildPostForm } from './';
import Modal from '../Modal';
import Form from '../Form';
import Pager from '../Pager';
import QuotesList from './QuotesList';

class OwnPostsList extends View {


    onItemDelete(item){
        var modal = new Modal({ 
            content: '<p>Do you want to delete this post?</p>', 
            title: 'Action', 
            submitButtonTitle: 'Yes',
            cancelButtonTitle: 'No' 
        });

        modal.setOnSubmit(() => {
            OwnPosts.destroy(item.id).done(() => this.refresh());
            modal.hide();
        });

        modal.show();
    }

    onItemEdit(item){

        var form = buildPostForm(new Form(data => OwnPosts.patch(item.id, data)), item)
            .addOnSuccess(() => this.refresh())
            .addAlert({ onSuccess: 'The post has been successfully updated!' });

        var modal = new Modal({ content: form.render(), title: 'Update Post' });

        modal.setOnSubmit(() => form.submit());

        modal.show();
    }

    onItemShare(item){
        var quotesList = new QuotesList(item);

        quotesList.setOnItemPick(() => this.refresh());

        var modal = new Modal({
            content: quotesList.render(),
            title: 'Review Quotes',
            hideSubmitButton: true,
            cancelButtonTitle: 'Close',
            isLarge: true
        });

        modal.show();
    }

    refresh(hard = false){
        this.pager.load(hard ? 1 : undefined);
    }

    render(){
        var el = $(`<div>
            <table class="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                        <th style="min-width: 90px;">Quote #</th>
                        <th style="min-width: 169px;">Client Name</th>
                        <th>Public Message</th>
                        <th style="min-width: 130px;">Status / Actions</th>
                    </tr> 
                  </thead>
                  <tbody></tbody>
                </table>
        
        </div>`);

        this.container = el.find('tbody');
        
        this.pager = new Pager(page => OwnPosts.load(page));

        this.pager.addOnLoad(data => {
            
            this.container.empty();

            data.forEach(post => {

                var item = new OwnPostItem(post);

                item
                    .setOnDelete(() => this.onItemDelete(post))
                    .setOnEdit(() => this.onItemEdit(post))
                    .setOnShare(() => this.onItemShare(post));
                
                this.container.append(item.render());
            });
        });

        el.append(this.pager.render());

        this.pager.load();

        return el;
    }
    
}

export default OwnPostsList;