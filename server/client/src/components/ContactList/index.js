import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../../actions';
import Contacts from '../Contacts';
import Contact from '../Contact';
import LoadingIndicator from '../Loading';

class ContactList extends React.Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        console.log('contacts', this.props.contacts.contacts);
        const contacts = this.props.contacts.contacts.map((contact, i) => {
            return (
                <Contact key={ i } firstName={contact.firstName} lastName={contact.lastName} email={contact.email} />
            )
        })
        return (
            <React.Fragment>
                <Contacts title="My Contacts">
                    { contacts }
                </Contacts>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, { fetchContacts })(ContactList);