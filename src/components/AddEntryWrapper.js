import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../style.css'
import { connect } from 'react-redux'
import { addEntry, showSnackbar } from '../reduxStore/actions.js'
import AddEntry from './AddEntry';


class AddEntryWrapper extends Component {
  render() {
    if (!['/login', '/signup'].includes(this.props.location.pathname)) {
      return <AddEntry addEntry={this.props.addEntry} showSnackbar={this.props.showSnackbar} />
    } else {
      return null
    }

  }
}


const mapStateToProps = state => ({
  entries: state.entries.entriesList,
  userId: state.user.id
})

export default connect(mapStateToProps, { addEntry, showSnackbar })(withRouter(AddEntryWrapper))