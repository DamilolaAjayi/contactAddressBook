import React, { Component } from 'react';
import './css/App.css';
import ListContacts from './components/ListContacts';
import SearchContacts from './components/SearchContacts';
import AddContacts from './components/AddContacts';

class App extends Component {
    constructor(){
      super();
      this.state = {
          contacts: []
      }
      // this.deleteContacts = this.deleteContacts.bind(this);
  }
  deleteContacts(contact){
    let tempContacts = this.state.contacts;
    // tempContacts = without(tempContacts, contact);

    this.setState({
      contacts: tempContacts
    });
  }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(result => {
                const data = result;
                this.setState({
                    contacts: data
                });
            })
    }
  render(){
    return (
      <div className="container">
        <AddContacts />
        <SearchContacts />
        <ListContacts contacts={this.state.contacts}
        deleteContacts={this.sdeleteContacts} />
      </div>
    );
  }
}

export default App;
