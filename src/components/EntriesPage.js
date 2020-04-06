import React, { Component } from 'react';
import { Typography, Grid, IconButton, Button } from '@material-ui/core';
import '../style.css'
import { fetchEntries, entriesTotalCount, changingEntries } from '../reduxStore/actions'
import { connect } from 'react-redux'
import EntryCard from './EntryCard';
import emptyState from '../assets/emptyState.svg'
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {user} from '../services/apiEndpoints'

class EntriesPage extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      totalPages: null,
    }
  }
  componentDidMount() {
    this.props.entriesTotalCount();
    this.props.fetchEntries();
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ widht: '100%', textAlign: 'center' }}>
            <Typography variant='h2' style={{ color: '#212121', textAlign: 'center', paddingTop: 40, fontWeight: 400 }}>Welcome Islam!</Typography>
            {!this.props.entries.length && !this.props.fetchingEntries ? <img alt='empty' src={emptyState} style={{ height: 700, width: 700 }} /> : null}
          </div>
          {this.props.fetchingEntries ?
            <Grid container justify='center' style={{ paddingTop: 20 }}>
              <Grid item xs={8} style={{ display: 'flex' }}>
                <Grid container>
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((x) => (
                    <Grid key={x} item xs={3} style={{ padding: 15 }}>
                      <Skeleton variant='rect' animation='wave' style={{ height: 280, width: '100%', borderRadius: 15, }} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            :
            <Grid container justify='center' style={{ paddingTop: 20 }}>
              <Grid item xs={8} style={{ display: 'flex' }}>
                <Grid container>
                  {this.props.entries.map((x, i) => (
                    <Grid key={i} item xs={3} style={{ padding: 15 }}>
                      <Link to={`/entries/${x.id}`} style={{ textDecoration: 'none', width: '100%' }} >
                        <EntryCard object={x} />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>}
          <div>
            <IconButton
              disabled={this.state.currentPage === 1}
              style={{ margin: 15, textAlign: 'center' }}
              onClick={() => { this.props.changingEntries(this.props.boundryDocs, 'back'); this.setState({currentPage : this.state.currentPage-1}) }}>
              <ArrowForwardIosIcon fontSize='large' style={{transform : 'rotate(180deg)'}}/>
            </IconButton>
            <IconButton
              disabled={this.state.currentPage === Math.ceil(this.props.totalCount / 8)}
              style={{ margin: 15, textAlign: 'center' }}
              onClick={() => { this.props.changingEntries(this.props.boundryDocs, 'next'); this.setState({currentPage : this.state.currentPage+1}) }}>
              <ArrowForwardIosIcon fontSize='large' />
            </IconButton>
            <Button onClick={()=> user('ddd@gmail.com', '44dsdd44d')}>press</Button>

          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  entries: state.entries.entriesList,
  fetchingEntries: state.entries.fetchingEntries,
  totalCount: state.entries.totalCount,
  boundryDocs: state.entries.boundryDocs
})

export default connect(mapStateToProps, { fetchEntries, entriesTotalCount, changingEntries })(EntriesPage)