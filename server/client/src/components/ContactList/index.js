import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContacts } from '../../actions';
import Contacts from '../Contacts';
import Contact from '../Contact';
//import LoadingIndicator from '../Loading';

class ContactList extends React.Component {

  static propTypes = {
    contacts: PropTypes.array,
    fetchContacts: PropTypes.func
  }

  static defaultProps = {
    contacts: [],
    fetchContacts: () => {}
  }

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const contacts = this.props.contacts.map((contact, i) => {
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

function mapStateToProps({ contacts: { contacts }}) {
  return {
    contacts
  }
}

export default connect(mapStateToProps, { fetchContacts })(ContactList)