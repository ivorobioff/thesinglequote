import { View } from 'sparrow-ui';
import Session from '../../Providers/Session';
import OwnPosts from '../../Providers/OwnPosts';
import OwnPostsList from './OwnPostsList';
import FormModal from '../Modal/FormModal';
import Form from '../Form';
import QuoteRequestsList from './QuoteRequestsList';

class Home extends View {

    onNewPostClick(e){
        e.preventDefault();

        var form = buildPostForm(new Form(data => OwnPosts.store(data), { 
            resetOnSuccess: true
        }))
        .addOnSuccess(() => this.ownPostsList.refresh(true))
        .addAlert({ onSuccess: 'The post has been successfully added!' });

        var modal = new FormModal({ form, title: 'New Post' });
        
        modal.show();
    }
    
    render(){
        var el = $(`<div class="container">
            <header class="jumbotron hero-spacer">
                <h1 id="greeting"></h1>
                <p>This page will show quotes. It will also allow them to edit their information.</p>
                <p><a class="btn btn-primary btn-large">Call to action!</a>
                </p>
            </header>
            <hr/>
            <div class="panel panel-default panel-table">
              <div class="panel-heading">
                <div class="row">
                  <div class="col col-xs-6">
                    <h3 class="panel-title">Your Posts</h3>
                  </div>
                  <div class="col col-xs-6 text-right">
                    <a id="newPostClick" class="btn btn-primary btn-sml" href="#">Post New</a>
                  </div>
                </div>
              </div>
              <div id="ownPostsList" class="panel-body"></div>
            </div>

            <div class="panel panel-default panel-table">
              <div class="panel-heading"><h3 class="panel-title">Posts needing Quotes</h3></div>
              <div id="quoteRequestsList" class="panel-body"></div>
            </div>

        </div>`);

        var user = Session.get().user;

        el.find('#greeting').text('Welcome back ' + user.fullName);
        el.find('#newPostClick').click(e => this.onNewPostClick(e));

        this.ownPostsList = new OwnPostsList();

        el.find('#ownPostsList').html(this.ownPostsList.render());

        var quoteRequestsList = new QuoteRequestsList();

        el.find('#quoteRequestsList').html(quoteRequestsList.render());
        
        return el;
    }
} 

export default Home;


export function buildPostForm(form, data = {}){
    form
        .addContent(`<div>
            <h1>Public Information
            </h1>
            <span class="help-block" id="hint_Title">
            Will be shared with all agents
            </span>
        </div>`)
        .addInput('title', { 
            value: data.title ? data.title : undefined, 
            label: 'Title - Explain your post', 
            placeholder: 'Car Insurance quote', 
            required: true
        })
        .addTextarea('publicMessage', { 
            value: data.publicMessage ? data.publicMessage : undefined, 
            label: 'Public Message', 
            required: true, 
            placeholder: 'I need a quote for 3 cars and 2 drivers that live in zip code of 90210. A 2005 toyota Camry, 2011 Ford Fiesta, and 2013 Ford Mustang. 100/300 liability and 15/30 Uninsured Motorist and comp/coll deductibles of 500/500 for all cars. Female married driver born on 11/08/1973 and Male married driver born 05/12/1971. No tickets or accidents.'})
        .addContent(`<div>
            <h1>Private Information
            </h1>
            <span class="help-block" id="hint_Title">
            Will be shared only with the agent you select
            </span>
            <hr/>
        </div>`)
        .addInput('clientName', { 
            value: data.clientName ? data.clientName : undefined,            
            label: 'Client Name', 
            placeholder: 'Mary Allen', 
            required: true
        })
        .addInput('clientPhone', { 
            value: data.clientPhone ? data.clientPhone : undefined,
            label: 'Client Phone', 
            placeholder: '1-234-567-8910', 
            required: true
        })
        .addTextarea('privateMessage', { 
            value: data.privateMessage ? data.privateMessage : undefined,
            label: 'Private Message', 
            required: true, 
            placeholder: 'First driver is Mary Allen and second driver is David Allen. They live on 123 Sunshine Rd. Beverly Hills, CA 90210.'})
        .addCheckbox('noPersonalInfoInPublic', { 
            value: data.noPersonalInfoInPublic ? data.noPersonalInfoInPublic : undefined,
            label: 'I have not posted any personal information in the public information sections'
        })

   return form;         
}