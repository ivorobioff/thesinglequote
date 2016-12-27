import { backend } from '../Helpers';
import Session from './Session';

const QuoteRequests = {
    
    load(page = 1){

        var session = Session.get();

        return backend({ method: 'GET', url: '/agents/' + session.user.id + '/requests', data: {
            orderBy: 'id:desc', page
        }});
    }
}

export default QuoteRequests;