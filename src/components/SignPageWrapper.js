import React, { Component } from 'react'
import { setUser } from '../reduxStore/actions'
import { connect } from 'react-redux'
import user from '../reduxStore/reducers/user'
import SignPage from './SignPage'


class SignPageWrapper extends Component {
  render() {
    return (
      <div>
        <SignPage setUser={this.props.setUser} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  id: user.id
})

export default connect(mapStateToProps, { setUser })(SignPageWrapper)