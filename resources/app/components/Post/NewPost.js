import React, { Component } from 'react';
import Form from '../Form';
import Input from '../Form/Input';
import Textarea from '../Form/Textarea';
import Checkbox from '../Form/Checkbox';
import Submit from '../Form/Submit';
import Session from '../../helpers/Session';

class NewPost extends Component {
    
    render(){

        var user = Session.get().user.id;

        return <div>
            <header className="jumbotron hero-spacer">
                <h1>Post a New Quote</h1>
            </header>
            <hr/>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <Form
                        name="newPost" 
                        request={{method: 'POST', url: '/agents/' + user + '/posts' }}>
                        <h1>Public Information</h1>
                        <span className="help-block">Will be shared with all agents.</span>
                        <Input 
                            label="Title - Explain your post" 
                            required={true}
                            name="title"  
                            placeholder="Car Insurance quote" />

                        <Textarea 
                            label="Public message" 
                            required={true}
                            name="publicMessage"
                            cols={40}
                            rows={10} 
                            placeholder="I need a quote for 3 cars and 2 drivers that live in zip code of 90210. A 2005 toyota Camry, 2011 Ford Fiesta, and 2013 Ford Mustang. 100/300 liability and 15/30 Uninsured Motorist and comp/coll deductibles of 500/500 for all cars. Female married driver born on 11/08/1973 and Male married driver born 05/12/1971. No tickets or accidents." />

                        <h1>Private Information</h1>
                        <span className="help-block">Will be shared with all agents.</span>

                        <Input 
                            label="Client Name" 
                            required={true}
                            name="clientName"  
                            placeholder="Mary Allen" />

                        <Input 
                            label="Client Phone Number" 
                            required={true}
                            name="clientPhone"  
                            placeholder="1-234-567-8910" />

                        <Textarea 
                            label="Private message" 
                            required={true}
                            name="privateMessage"
                            cols={40}
                            rows={10} 
                            placeholder="First driver is Mary Allen and second driver is David Allen. They live on 123 Sunshine Rd. Beverly Hills, CA 90210." />
                   
                        <Checkbox name="noPersonalInfo" label="I have not posted any personal information in the public information sections." />
                    
                        <Submit color="primary">Submit</Submit>
                    </Form>
                    
                </div>
            </div>
            <hr />
        </div>
    }
}

export default NewPost;