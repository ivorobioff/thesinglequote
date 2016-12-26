import { backend } from '../Helpers';
import Session from './Session';

const QuoteRequests = {
    load(page = 1){
        return backend({ method: 'GET', url: '/agents/requests', data: {
            orderBy: 'id:desc', page
        }});
    }
}

export default QuoteRequests;