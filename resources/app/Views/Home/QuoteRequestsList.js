import { View } from 'sparrow-ui';
import QuoteRequests from '../../Providers/QuoteRequests';
import QuoteRequestItem from './QuoteRequestItem';
import Pager from '../Pager';

class QuoteRequestsList extends View {
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

                this.container.append(item.render());
            });
        });

        el.append(this.pager.render());

        this.pager.load();

        return el;
    }
}


export default QuoteRequestsList;