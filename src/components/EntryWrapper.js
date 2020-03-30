import React, { Component } from 'react';
import '../style.css'
import { connect } from 'react-redux'
import { getEntry } from '../services/apiEndpoints'
import reading from '../assets/readingImg.svg'
import Entry from './Entry';

class EntryWrapper extends Component {
  constructor() {
    super()
    this.state = {
      entry: null,
    }
  }
  componentDidMount() {
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
    return (
      <div>
        {this.state.entry ?
          <Entry title={this.state.entry.title} body={this.state.entry.body} reading={reading} />
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entriesList,
})

export default connect(mapStateToProps)(EntryWrapper);
