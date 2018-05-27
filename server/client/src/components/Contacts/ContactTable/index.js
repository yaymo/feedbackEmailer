import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { fetchContacts } from '../../../actions';
import './contactTable.css';

import LoadingIndicator from '../../Loading';

class ContactTable extends React.Component {

  static propTypes = {
    contacts: PropTypes.array,
    fetchContacts: PropTypes.func,
    isLoading: PropTypes.bool
  }

  static defaultProps = {
    contacts: [],
    fetchContacts: () => {},
    isLoading: false
  }

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, isLoading } = this.props;
    return (
      <React.Fragment>
        { isLoading && <LoadingIndicator />}
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
      </React.Fragment>
    )
  }
}

function mapStateToProps({ contacts: { contacts, isLoading }}) {
  return {
    contacts,
    isLoading
  }
}

export default connect(mapStateToProps, { fetchContacts })(ContactTable)