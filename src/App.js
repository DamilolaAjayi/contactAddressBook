import React, { Component } from 'react';
import './css/App.css';
import ListContacts from './components/ListContacts';
import SearchContacts from './components/SearchContacts';
import AddContacts from './components/AddContacts';
import {without, findIndex} from 'lodash';
class App extends Component {
    constructor(){
      super();
      this.state = {
          contacts: [],
          formDisplay: true
      }
      this.deleteContacts = this.deleteContacts.bind(this);
      this.toggleForm = this.toggleForm.bind(this);
  }
  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }
  deleteContacts(contact){
    let tempContacts = this.state.contacts;
    tempContacts = without(tempContacts, contact);

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
        <AddContacts formDisplay={this.state.formDisplay}
        toggleForm= {this.toggleForm}/>
        <SearchContacts />
        <ListContacts contacts={this.state.contacts}
        deleteContacts={this.deleteContacts} />
      </div>
    );
  }
}

export default App;
