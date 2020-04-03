import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import '../style.css'
import { fetchEntries, entriesTotalCount } from '../reduxStore/actions'
import { connect } from 'react-redux'
import EntryCard from './EntryCard';
import emptyState from '../assets/emptyState.svg'
import Skeleton from '@material-ui/lab/Skeleton';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from "react-router-dom";


class EntriesPage extends Component {
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
            <Pagination count={Math.ceil(this.props.totalCount / 8)} color='primary' style={{display : 'flex', justifyContent : 'center', padding : 40}} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  entries: state.entries.entriesList,
  fetchingEntries: state.entries.fetchingEntries,
  totalCount : state.entries.totalCount
})

export default connect(mapStateToProps, { fetchEntries, entriesTotalCount })(EntriesPage)
