import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../style.css'
import { connect } from 'react-redux'
import { addEntry, showSnackbar } from '../reduxStore/actions.js'
import AddEntry from './AddEntry';


class AddEntryWrapper extends Component {
  render() {
    if (['/login', '/signup', '/', '/about'].includes(this.props.location.pathname) || (['/contact', '/aboutus'].includes(this.props.location.pathname) && !this.props.userId)) {
      return null
    } else {
      return <AddEntry addEntry={this.props.addEntry} showSnackbar={this.props.showSnackbar} />
    }

  }
}


const mapStateToProps = state => ({
  entries: state.entries.entriesList,
  userId: state.user.id
})

export default connect(mapStateToProps, { addEntry, showSnackbar })(withRouter(AddEntryWrapper))