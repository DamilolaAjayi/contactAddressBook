import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddContacts extends Component {
    render(){
        return(
            <div className={
                'card textcenter mt-3 ' +
                (this.props.formDisplay ? '' : 'add-contact') 
            }>
            <div className="cnt-addheading"
                onClick={this.props.toggleForm}>
             <FaPlus /> Add Contact
            </div>
            <div className="row">
                <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <input placeholder="First Name" id="firstName" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                    <input id="lastName" type="text" className="validate" />
                    <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <input placeholder="First Name" id="firstName" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                    Enter a simple catchphrase:
                    <div className="input-field inline">
                        <input id="email_inline" type="email" className="validate" />
                        <label htmlFor="email_inline"></label>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
        )
    }
}

export default AddContacts;