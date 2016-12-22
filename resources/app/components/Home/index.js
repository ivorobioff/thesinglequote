import React, { Component } from 'react';
import Header from './Header';
import OwnPosts from './OwnPosts';

class Home extends Component {
    render(){
        return <div>
            <Header />
            <hr />
            <OwnPosts />
        </div>
    }
}

export default Home;
