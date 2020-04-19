import React, { Component } from 'react'
import { fetchEntries } from '../reduxStore/actions'
import { connect } from 'react-redux'

class Test extends Component {
  componentDidMount() {
    console.log('ddd')
    this.props.fetchEntries();
  }
  render() {
    return (
      <div style={{padding: '100px 100px'}}>
        <h1>Test Page</h1>
        <h1>{this.props.entries.length}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entriesList
})

export default connect(mapStateToProps, {fetchEntries})(Test)