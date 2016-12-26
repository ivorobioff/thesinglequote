import { View } from 'sparrow-ui';

class QuoteRequestAction extends View {

    constructor(data){
        super();
        this.data = data;
    }

    render(){
        var data = this.data;
        var el = $(`
            <div class="btn-group">
                <button id="statusButton" type="button"  data-toggle="dropdown" class="btn dropdown-toggle"></button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="uploadAction">Propose a Quote</a></li>
                </ul>
            </div>
        `);
        
        el.find('#statusButton')
            .addClass('btn-default')
            .text('Open' + ' ')
            .append(`<span class="caret"></span>`);
        
        return el;
    }
}

export default QuoteRequestAction;