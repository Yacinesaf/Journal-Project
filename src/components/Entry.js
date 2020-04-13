import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import '../style.css'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Entry({ title, body, reading }) {
  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <div>
      <Grid className='appBackground' container justify='center' alignContent='flex-start' style={{ minHeight: '100vh', paddingTop: 64, backgroundColor: '#f2f2f2' }}>
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