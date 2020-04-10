import React, { Component } from 'react';
import '../style.css'
import { fetchEntries, entriesTotalCount, changingEntries } from '../reduxStore/actions'
import { connect } from 'react-redux'
import EntriesPage from './EntriesPage';


class EntriesPageWrapper extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      totalPages: null,
    }
  }
  componentDidMount() {
    this.props.entriesTotalCount();
    this.props.fetchEntries();
  }

  render() {
    return (
      <EntriesPage
        entries={this.props.entries}
        fetchingEntries={this.props.fetchingEntries}
        email={this.props.email}
        currentPage={this.state.currentPage}
        boundryDocs={this.props.boundryDocs}
        totalCount={this.props.totalCount}
        changingEntries={this.props.changingEntries}
      />
    );
  }
}
const mapStateToProps = state => ({
  entries: state.entries.entriesList,
  fetchingEntries: state.entries.fetchingEntries,
  totalCount: state.entries.totalCount,
  boundryDocs: state.entries.boundryDocs,
  email: state.user.email
})

export default connect(mapStateToProps, { fetchEntries, entriesTotalCount, changingEntries })(EntriesPageWrapper)