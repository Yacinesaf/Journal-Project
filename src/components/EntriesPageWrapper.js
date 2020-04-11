import React, { Component } from 'react';
import '../style.css'
import { fetchEntries, entriesTotalCount, changingEntries } from '../reduxStore/actions'
import { connect } from 'react-redux'
import EntriesPage from './EntriesPage';
import { Redirect } from 'react-router';

class EntriesPageWrapper extends Component {
  constructor() {
    super()
    this.state = {
      totalPages: null,
    }
  }
  componentDidMount() {
    this.props.entriesTotalCount();
    this.props.fetchEntries();
  }

  render() {
    if (!this.props.userId) {
      return (
        <EntriesPage
          entries={this.props.entries}
          fetchingEntries={this.props.fetchingEntries}
          email={this.props.email}
          boundryDocs={this.props.boundryDocs}
          totalCount={this.props.totalCount}
          changingEntries={this.props.changingEntries}
        />
      );
    } else {
      return <Redirect to='/login' />
    }
  }
}
const mapStateToProps = state => ({
  entries: state.entries.entriesList,
  fetchingEntries: state.entries.fetchingEntries,
  totalCount: state.entries.totalCount,
  boundryDocs: state.entries.boundryDocs,
  email: state.user.email,
  userId: state.user.id
})

export default connect(mapStateToProps, { fetchEntries, entriesTotalCount, changingEntries })(EntriesPageWrapper)