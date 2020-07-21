import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../css/App.css'
class ListContacts extends Component{
    render(){
        return (
            <div>
              {this.props.contacts.map(contact => (
                <div className="row" key={contact.id}>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <div class="card-title">{contact.name}
                                    <span>
                                    <a class="waves-effect waves-light btn">
                                        <FaTimes />
                                        </a>
                                    </span>                            
                                </div>
                                <p>{contact.company.catchPhrase}.</p>
                            </div>
                            <div className="card-action">
                                <a href={'mailto:' + contact.email}>{contact.email}</a>
                                <a href={'http://' + contact.website}>{contact.website}</a>
                            </div>
                        </div>
                    </div>
                </div>
              ))}
            </div>

        )
    }
} 



export default ListContacts;