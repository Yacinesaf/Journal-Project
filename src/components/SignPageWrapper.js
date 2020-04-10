import React, { Component } from 'react'
import { setUser, hideSnackbar, showSnackbar } from '../reduxStore/actions'
import { connect } from 'react-redux'
import SignPage from './SignPage'
import { loggedUser } from '../services/apiEndpoints'


class SignPageWrapper extends Component {
  render() {
    return (
      <div>
        <SignPage
          setUser={this.props.setUser}
          hideSnackbar={this.props.hideSnackbar}
          showSnackbar={this.props.showSnackbar}
          loggedUser={loggedUser}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  id: state.user.id
})

export default connect(mapStateToProps, { setUser, hideSnackbar, showSnackbar })(SignPageWrapper)