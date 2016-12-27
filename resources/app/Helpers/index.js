import Session from '../Providers/Session';

export function backend (options) {
    
    var config = {
        url: '/api' + options.url,
        type: options.method,
        contentType: 'application/json; charset=utf-8'
    };

    if (typeof options.data !== 'undefined'){
        if (options.method === 'GET' || options.method === 'DELETE'){
            config.url += '?' + decodeURIComponent($.param(options.data));
        } else {
            config.data = JSON.stringify(options.data);
        }
    }

    var auth = Session.get();

    if (auth){
        config.headers = { token: auth.token }
    }

    return $.ajax(config);
}

export function upload(file){
    
    var data = new FormData();

    data.append('document', file);

    return $.ajax({
        url: '/api/documents',
        type: 'POST',
        data,
        cache: false,
        contentType: false,
        processData: false
    });
}