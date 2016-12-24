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
    
    has(){
        return this.get() !== null;
    },

    destroy (){
        this.source = null;
        localStorage.removeItem('session');
    }
}

export default Session;