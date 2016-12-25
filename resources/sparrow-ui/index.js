import page from 'page';

export class View {
    
}

export class Link extends View {

    constructor(options){
        super();
        this.options = options;
    }

    render(){
        var el = $('<a/>').attr('href', this.options.href).text(title);

        if (this.options['class']){
            el.addClass(this.options['class']);
        }

        el.click(e => {
            e.preventDefault();
            page(href);
        });

        return el;
    }
}