import { backend } from '../Helpers';

const Agents = {
    store(data){
        return backend({ method: 'POST', url: '/agents', data});
    }
}

export default Agents;