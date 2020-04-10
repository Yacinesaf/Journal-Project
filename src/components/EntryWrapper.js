import React, { Component } from 'react';
import '../style.css'
import { connect } from 'react-redux'
import { getEntry } from '../services/apiEndpoints'
import reading from '../assets/readingImg.svg'
import Entry from './Entry';
import { Redirect } from 'react-router';

class EntryWrapper extends Component {
  constructor() {
    super()
    this.state = {
      entry: null,
    }
  }
  componentDidMount() {
    if (!this.props.userId) return
    let entryFromStore = this.props.entries.find(x => x.id === this.props.match.params.id);
    if (!entryFromStore) {
      getEntry(this.props.match.params.id).then(res => {
        this.setState({ entry: res })
      });
    } else {
      this.setState({ entry: entryFromStore })
    }
  }
  render() {
    if (this.props.userId) {
      return (
        <div>
          {this.state.entry ?
            <Entry title={this.state.entry.title} body={this.state.entry.body} reading={reading} />
            : null}
        </div>
      );
    } else {
      return <Redirect to='/login' />

    }

  }
}

const mapStateToProps = state => ({
  entries: state.entries.entriesList,
  userId: state.user.id
})

export default connect(mapStateToProps)(EntryWrapper);
