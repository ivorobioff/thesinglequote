import page from 'page';

export class View {
    
}

export class Link extends View {
    render(options){
        var el = $('<a/>').attr('href', options.href).text(title);

        el.click(e => {
            e.preventDefault();
            page(href);
        });

        return el;
    }
}