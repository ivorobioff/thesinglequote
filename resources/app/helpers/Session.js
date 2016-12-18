export default {
    get (){
        var session = localStorage.getItem('session');

        if (session === null){
            return null;
        }
        return $.parseJSON(session);
    },
    
    has(){
        return localStorage.getItem('session') !== null;
    },

    destroy (){
        localStorage.removeItem('session');
    }
};