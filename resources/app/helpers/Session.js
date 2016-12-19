export default {
    get (){
        var session = localStorage.getItem('session');

        if (session === null){
            return null;
        }
        return $.parseJSON(session);
    },

    set(data){
        localStorage.setItem('session', JSON.stringify(data));
    },
    
    has(){
        return localStorage.getItem('session') !== null;
    },

    destroy (){
        localStorage.removeItem('session');
    }
};