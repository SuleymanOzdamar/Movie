import React, { Component } from 'react'
import ActorList from './actorList';



class HomePage extends Component {
    
    render() {
        return (
            <div>
                <h2>Actor List</h2>
                <ActorList />
            </div>
        );
    }
}



export default HomePage;