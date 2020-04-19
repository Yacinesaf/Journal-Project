import React from 'react';
import { Typography, Grid, IconButton } from '@material-ui/core';
import '../style.css'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useHistory} from 'react-router-dom'

function Entry({ title, body, reading }) {
  const history = useHistory()
  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <div>
      <IconButton  onClick={()=> history.push('/entries')}>
        <ArrowBackIosIcon fontSize='large' style={{color : 'rgb(82, 84, 170)'}} />
      </IconButton>
      <Grid className='appBackground' container justify='center' alignContent='flex-start' style={{ minHeight: 'calc(100vh - 64px)', backgroundColor: '#f2f2f2' }}>
        <Grid item xs={10} >
          <Typography variant='h3' style={{ fontWeight: 550, textAlign: 'left', paddingTop: 100 }} color='initial'>{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify='center' alignContent='center' style={{ paddingTop: 100 }}>
            <Grid item xs={5} style={{ paddingRight: 50 }}>
              <Typography variant='h4' style={{ textAlign: 'left' }} >{body}</Typography>
            </Grid>
            <Grid item xs={5}>
              <div className='floating' style={{
                position: "absolute",
                backgroundImage: `url(${reading})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                height: 500,
                width: 700,
                float: 'right'
              }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Entry;