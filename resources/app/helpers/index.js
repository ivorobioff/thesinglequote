import { serverError } from '../actions/server';
import Session from './Session';

export function backend (options) {

    if (typeof options.session === 'undefined'){
        options.session = true;
    }

    var config = {
        url: '/api' + options.url,
        type: options.method,
        contentType: 'application/json'
    };

    if (typeof options.data !== 'undefined'){
        if (options.method === 'GET' || options.method === 'DELETE'){
            config.url += '?' + decodeURIComponent($.param(options.data));
        } else {
            config.data = JSON.stringify(options.data);
        }
    }
    
    return {
        run(dispatch) {
            if (options.session == true){
                var s = Session.get();
                
                if (s !== null){

                    var expiresAt = new Date(s.expiresAt);
                    var now = new Date();

                    // gives 10 minutes to refresh the session
                    
                    if (now.getTime() >= (expiresAt.getTime() - 600000)){
                        backend({ method: 'POST', url: '/sessions/' + s.id + '/refresh'}).run(dispatch).done(function(data){
                            localStorage.setItem('session', JSON.stringify(data));
                            s = data;
                        }).fail(function(){
                            localStorage.removeItem('session');
                            dispatch(redirectTo('/'));
                        });
                    }
        
                    config.headers = { token: s.token }
                } else {
                    dispatch(redirectTo('/'));
                }
            }

            return $.ajax(config).fail(function(x){
                if (x.status >= 500){
                    dispatch(serverError('You got an internal server error. Please contact our support center.'));
                }
            });
        }
    }
}