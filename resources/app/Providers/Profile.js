import Session from './Session';
import { backend } from '../Helpers';

var Profile = {

    load(){
        var session = Session.get();
        return backend({ method: 'GET', url: '/agents/' + session.user.id });
    },

    patch(data){
        var session = Session.get();
        return backend({ method: 'PATCH', url: '/agents/' + session.user.id, data });
    }
}

export default Profile;