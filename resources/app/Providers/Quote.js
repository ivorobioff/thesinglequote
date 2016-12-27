import { backend } from '../Helpers';
import Session from './Session';

const Quote = {

    store(requestId, data){
        var session = Session.get();
        return backend({ method: 'POST', url: '/agents/' + session.user.id + '/requests/' + requestId + '/quote', data});
    },

    destroy(requestId){
        var session = Session.get();
        return backend({ method: 'DELETE', url: '/agents/' + session.user.id + '/requests/' + requestId + '/quote'});
    }
}

export default Quote;