import React from 'react';
import Contacts from '../Contacts';
import Contact from '../Contact';

class ContactList extends React.Component {

    render() {
        return (
            <Contacts title="My Contacts">
                <Contact name="John Doe" />
                <Contact name="Joe Schmoe" />
            </Contacts>
        )
    }
}

export default ContactList;