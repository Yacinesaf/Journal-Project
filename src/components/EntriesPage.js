import React from 'react';
import { Typography, Grid, IconButton } from '@material-ui/core';
import '../style.css'
import EntryCard from './EntryCard';
import emptyState from '../assets/emptyState.svg'
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function EntriesPage({ entries, fetchingEntries, email, currentPage, boundryDocs, totalCount, changingEntries }) {

  return (
    <div className='appBackground' style={{ minHeight: '100vh', paddingTop: 64 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ widht: '100%', textAlign: 'center' }}>
          <Typography variant='h2' style={{ color: '#212121', textAlign: 'center', paddingTop: 40, fontWeight: 400 }}>{`Welcome ${email}`}</Typography>
          {!entries.length && !fetchingEntries ? <img alt='empty' src={emptyState} style={{ height: 700, width: 700 }} /> : null}
        </div>
        {fetchingEntries ?
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
                {entries.map((x, i) => (
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
            disabled={currentPage === 1}
            style={{ margin: 15, textAlign: 'center' }}
            onClick={() => { changingEntries(boundryDocs, 'back'); this.setState({ currentPage: currentPage - 1 }) }}>
            <ArrowForwardIosIcon fontSize='large' style={{ transform: 'rotate(180deg)' }} />
          </IconButton>
          <IconButton
            disabled={currentPage === Math.ceil(totalCount / 8)}
            style={{ margin: 15, textAlign: 'center' }}
            onClick={() => { changingEntries(boundryDocs, 'next'); this.setState({ currentPage: currentPage + 1 }) }}>
            <ArrowForwardIosIcon fontSize='large' />
          </IconButton>
        </div>
      </div>
    </div>
  );
}



export default EntriesPage