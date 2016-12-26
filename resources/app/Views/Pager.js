import { View } from 'sparrow-ui';

class Pager extends View {

    constructor(loader){
        super();
        this.loader = loader;
        this.page = 1;
        this.onLoadCallbacks = [];
        this.meta = { totalPages: 1 };
        this.isLoading = false;
    }

    addOnLoad(callback) {
        this.onLoadCallbacks.push(callback);
        return this;
    }

    load(page = undefined){

        if (page){
            this.page = page;
        }

        this.isLoading = true;
        this.next.addClass('disabled');
        this.prev.addClass('disabled');

        return this.loader(this.page)
            .always(() => {
                this.isLoading = false;
                this.handlePrevDisplay();
                this.handleNextDisplay();
            })
            .done(data => {
                this.meta = data.meta.pagination;
                
                if (this.page > this.meta.totalPages){
                    this.page = this.meta.totalPages;
                    this.load();
                }

                this.handleNextDisplay();

                this.onLoadCallbacks.forEach(callback => callback(data.data));
            });
    }

    handlePrevDisplay(){
        if (this.page == 1){
            this.prev.addClass('disabled');
        } else {
            this.prev.removeClass('disabled');
        }
    }

    onPrevClick(e){
        e.preventDefault();

        if (this.page == 1 || this.isLoading){
            return ;
        }

        this.page --;

        this.load();
    }

    onNextClick(e){
        e.preventDefault();

        if (this.page == this.meta.totalPages || this.isLoading){
            return ;
        }

        this.page ++;

        this.load();
    }

    handleNextDisplay(){
        if (this.page == this.meta.totalPages){
            this.next.addClass('disabled');
        } else {
            this.next.removeClass('disabled');
        }
    }


    render(){
        var el = $(`<nav aria-label="...">
            <ul class="pager">
                <li id="prev" class="previous disabled"><a href="#"><span aria-hidden="true">&larr;</span> Older</a></li>
                <li id="next" class="next disabled"><a href="#">Newer <span aria-hidden="true">&rarr;</span></a></li>
            </ul>
        </nav>`);

        this.prev = el.find('#prev');
        this.next = el.find('#next');

        this.prev.click(e => this.onPrevClick(e));
        this.next.click(e => this.onNextClick(e));

        return el;
    }
}

export default Pager;