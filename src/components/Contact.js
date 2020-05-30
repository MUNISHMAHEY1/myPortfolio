import React, { Component } from 'react'
import ContactList from './ContactList'

export class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <h2 style={{fontSize:"2.5rem", textAlign:"center" }}>Contact Me</h2>
                <hr className="contact-hr-style" />
                <ContactList></ContactList>
            </div>
        )
    }
}

export default Contact
