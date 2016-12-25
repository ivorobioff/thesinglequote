import { backend } from '../Helpers';
import Session from './Session';

const OwnPosts = {
    
    load(reload = false){
        if (typeof this.data  === 'undefined' || reload){
            var session = Session.get();
            return backend({ 
                method: 'GET', url: '/agents/' + session.user.id + '/posts'
            });
        }

        return $.Deferred().resolve(this.data);
    },

    destroy(id){
        var session = Session.get();

        return backend({ 
            method: 'DELETE', url: '/agents/' + session.user.id + '/posts/' + id
        });
    },

    store(data){
        return backend({ 
            method: 'POST', 
            url: '/agents/' + session.user.id + '/posts',
            data
        });
    }
}

export default OwnPosts;