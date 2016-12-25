import { View } from 'sparrow-ui';
import OwnPosts from '../../Providers/OwnPosts';
import OwnPostItem from './OwnPostItem';

class OwnPostsList extends View {

    onItemDelete(){
        this.load(true)
    }

    load(reload = false){
        this.container.empty();

        OwnPosts.load(reload).done(data => {
            data.data.forEach(post => {

                var item = new OwnPostItem(post);
                item.setOnDelete(() => this.onItemDelete());
                
                this.container.append(item.render());
            });
        });
    }

    render(){
        var el = $(`
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
        `);

        this.container = el.find('tbody');

        this.load();

        return el;
    }
    
}

export default OwnPostsList;