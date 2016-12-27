import  { backend } from '../Helpers';
import Session from './Session';

const Quotes = {
    load(postId){
        var session = Session.get();
        
        return backend({ method: 'GET', url: '/agents/' + session.user.id + '/posts/' + postId + '/quotes' });
    },

    pick(postId, quoteId) {
        var session = Session.get();
        return backend({ method: 'POST', url: '/agents/' + session.user.id + '/posts/' + postId + '/quotes/' + quoteId + '/pick'});
    },

    unpick(postId, quoteId) {
        var session = Session.get();
        return backend({ method: 'POST', url: '/agents/' + session.user.id + '/posts/' + postId + '/quotes/' + quoteId + '/unpick'});
    }
}

export default Quotes;