import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import '../style.css'
import { connect } from 'react-redux'
import { getEntry } from '../services/apiEndpoints'

class EntryContent extends Component {
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
        <Grid className='appBackground' container justify='center' style={{ minHeight: '100vh', paddingTop: 64 }}>
          {this.state.entry ? <Grid item xs={10}>
            <h1>{this.state.entry.title}</h1>
            <p>{this.state.entry.body}</p>
          </Grid> : null}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entriesList,
})

export default connect(mapStateToProps)(EntryContent);
