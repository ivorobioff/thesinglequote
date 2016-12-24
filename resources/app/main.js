import App from './Views/App';
import page from 'page';
import Session from './Services/Session';
import { backend } from './Helpers'

setInterval(() => {

    var session = Session.get();

    if (!session){
        return ;
    }

    var expiresAt = new Date(session.expiresAt);
    var now = new Date();

    // gives 10 minutes to refresh the session
    
    if (now.getTime() >= (expiresAt.getTime() - 600000)){
        backend({ 
            method: 'POST', 
            url: '/sessions/' + session.id + '/refresh'
        })
        .done(data => Session.set(data));
    }
}, 10000);

var app = new App();

page((context) => {
    var location = context.pathname;

    if (Session.has() && location === '/login'){
        return page.redirect('/');
    } 
    
    if (!Session.has() && location !== '/login'){
        return page.redirect('/login');
    }

    $('#app').html(app.render(context));
});

page();