import { View } from 'sparrow-ui';

class QuoteRequestAction extends View {

    constructor(data){
        super();
        this.data = data;
    }

    onProposeQuoteClick(e){
        e.preventDefault();

        if (this.onProposeQuoteCallback){
            this.onProposeQuoteCallback();
        }
    }

    setOnProposeQuote(callback){
        this.onProposeQuoteCallback = callback;
        return this;
    }

    onCancelQuoteClick(e){
        e.preventDefault();

        if (this.onCancelQuoteCallback){
            this.onCancelQuoteCallback();
        }
    }

    setOnCancelQuote(callback){
        this.onCancelQuoteCallback = callback;
        return this;
    }

    onViewQuoteClick(e){
        e.preventDefault();

        if (this.onViewQuoteCallback){
            this.onViewQuoteCallback();
        }
    }

     setOnViewQuote(callback){
        this.onViewQuoteCallback = callback;
        return this;
    }

    onViewDetailsClick(e){
        e.preventDefault();

        if (this.onViewDetailsCallback){
            this.onViewDetailsCallback();
        }
    }

    setOnViewDetails(callback){
        this.onViewDetailsCallback = callback;
        return this;
    }

    render(){
        var data = this.data;
        var el = $(`
            <div class="btn-group">
                <button id="statusButton" type="button"  data-toggle="dropdown" class="btn dropdown-toggle"></button>
                <ul id="menu" class="dropdown-menu"></ul>
            </div>
        `);
        
        var statuses = {
            open: {
                name: 'open',
                title: 'Open',
                color: 'default',
            },
            proposed: {
                name: 'proposed',
                title: 'Proposed',
                color: 'primary',
            },
            shared: {
                name: 'shared',
                title: 'Accepted',
                color: 'success',
            }
        }

        var status;

        if (data.status === 'active' && data.quote !== null){
            status = statuses.proposed;
        } else if (data.status === 'done' && data.quote !== null && data.quote.isPicked) {
            status = statuses.shared;
        } else {
            status = statuses.open;
        }
        
        el.find('#statusButton')
            .addClass('btn-' + status.color)
            .text(status.title + ' ')
            .append(`<span class="caret"></span>`);
        
        var menu = el.find('#menu');

        if (status.name === 'open'){
            var action = $('<a/>', { href: '#', text: 'Propose a Quote'});
            action.click(e => this.onProposeQuoteClick(e));
            menu.append($('<li/>').html(action));
        } else if (status.name === 'proposed'){
            var action = $('<a/>', { href: '#', text: 'View My Quote'});
            action.click(e => this.onViewQuoteClick(e));
            menu.append($('<li/>').html(action));

            action = $('<a/>', { href: '#', text: 'Cancel My Quote'});
            action.click(e => this.onCancelQuoteClick(e));
            menu.append($('<li/>').html(action));
        } else if (status.name === 'shared'){
            var action = $('<a/>', { href: '#', text: 'View All Details'});
            action.click(e => this.onViewDetailsClick(e));
            menu.append($('<li/>').html(action));

            action = $('<a/>', { href: '#', text: 'View My Quote'});
            action.click(e => this.onViewQuoteClick(e));
            menu.append($('<li/>').html(action));
        }
        
        return el;
    }
}

export default QuoteRequestAction;