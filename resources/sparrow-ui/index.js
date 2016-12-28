import page from 'page';

export class View {
    
}

export class Link extends View {

    constructor(options){
        super();
        this.options = options;
    }

    render(){
        return $('<a/>', {
            href: this.options.href,
            text: this.options.text,
            'class': this.options['class']
        })
        .click(e => {
            e.preventDefault();
            page(this.options.href);
        });
    }
}