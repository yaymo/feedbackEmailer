import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { fetchContacts } from '../../../actions';
import './contactTable.css';

export class ContactTable extends React.Component {

  static propTypes = {
    contacts: PropTypes.array,
    fetchContacts: PropTypes.func,
  }

  static defaultProps = {
    contacts: [],
    fetchContacts: () => {},
  }

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <ReactTable data={ contacts }
        columns={[
          { Header: "First Name", accessor: "firstName" },
          { Header: "Last Name", accessor: "lastName" },
          { Header: "Email", accessor: "email" }
        ]}
        defaultSorted={[
          { id: "firstName", desc: true }
        ]}
        defaultPageSize={ 10 }
        className="-striped -highlight contact-table"
      />
    )
  }
}

function mapStateToProps({ contacts: { contacts }}) {
  return {
    contacts
  }
}

export default connect(mapStateToProps, { fetchContacts })(ContactTable)