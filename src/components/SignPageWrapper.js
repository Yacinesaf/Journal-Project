import React, { Component } from 'react'
import { setUser, hideSnackbar, showSnackbar, loginAction } from '../reduxStore/actions'
import { connect } from 'react-redux'
import SignPage from './SignPage'


class SignPageWrapper extends Component {
  render() {
    return (
      <div>
        <SignPage
          setUser={this.props.setUser}
          hideSnackbar={this.props.hideSnackbar}
          showSnackbar={this.props.showSnackbar}
          loginAction={this.props.loginAction}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { setUser, hideSnackbar, showSnackbar, loginAction })(SignPageWrapper)