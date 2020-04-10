import React, { Component } from 'react';
import '../style.css'
import NavPcVersion from './NavPcVersion';
import { connect } from 'react-redux'

class NavPcVersionWrapper extends Component {
  render() {
    return <NavPcVersion userId={this.props.userId} />
  }
}

const mapStateToProps = state => ({
  userId: state.user.id
})

export default connect(mapStateToProps)(NavPcVersionWrapper)
