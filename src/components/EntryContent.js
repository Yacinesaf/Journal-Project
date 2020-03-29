import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
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
        {this.state.entry ?
          <Grid className='appBackground' justify='center' container style={{ minHeight: '100vh', paddingTop: 64 }}>
            <Grid item xs={12} style ={{height : 350}}>
              <Grid container>
                <div style={{
                  width: '100%',
                  backgroundImage: `url(${this.state.entry.img})`,
                  height: '100%',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                >
                  <div style={{
                    backgroundColor: 'rgba(0,0,0,.3)',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }} >
                    <Typography variant='h3' color='initial' style={{ color: 'white' }}>{this.state.entry.title}</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Typography variant='subtitle1' style={{textAlign : 'center'}} >{this.state.entry.body}</Typography>
            </Grid>
          </Grid>
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entriesList,
})

export default connect(mapStateToProps)(EntryContent);
