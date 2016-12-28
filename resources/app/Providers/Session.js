import { backend } from '../Helpers';

const Session = {
    get (){
        if (typeof this.source === 'undefined'){
            this.source = localStorage.getItem('session');

            if (this.source){
                this.source = $.parseJSON(this.source);
                var now = new Date();
                var expiresAt = new Date(this.source.expiresAt);

                if (expiresAt.getTime() < now.getTime()){
                    this.destroy();
                }
            }
        }

        return this.source;
    },

    set(data){
        this.source = data;
        localStorage.setItem('session', JSON.stringify(this.source));
    },
    
    store(data){
        return backend({ method: 'POST', url: '/sessions', data})
            .done(data => this.set(data));
    },

    reload(){
        return backend({ method: 'GET', url: '/sessions/' + this.get().id }).done(data => this.set(data));
    },

    refresh(){
        return backend({ 
            method: 'POST', 
            url: '/sessions/' + this.get().id + '/refresh'
        })
        .done(data => this.set(data));
    },
    
    has(){
        return this.get() !== null;
    },

    destroy (){
        this.source = null;
        localStorage.removeItem('session');
    }
}

export default Session;