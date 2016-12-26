import { backend } from '../Helpers';
import Session from './Session';

const OwnPosts = {
    
    load(page = 1){
        var session = Session.get();

        return backend({ 
            method: 'GET', url: '/agents/' + session.user.id + '/posts',
            data: { orderBy: 'id:desc', page }
        });

        return $.Deferred().resolve(this.data);
    },

    destroy(id){
        var session = Session.get();

        return backend({ 
            method: 'DELETE', url: '/agents/' + session.user.id + '/posts/' + id
        });
    },

    patch(id, data){
        var session = Session.get();
        
        return backend({ 
            method: 'PATCH', 
            url: '/agents/' + session.user.id + '/posts/' + id,
            data
        });
    },

    store(data){
        var session = Session.get();
        
        return backend({ 
            method: 'POST', 
            url: '/agents/' + session.user.id + '/posts',
            data
        });
    }
}

export default OwnPosts;