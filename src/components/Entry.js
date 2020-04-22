import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import '../style.css'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Entry({ title, body, reading }) {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Grid className='appBackground' container justify='center' alignContent='flex-start' style={{ minHeight: '100vh' }}>
        <Grid item xs={11} md={10} >
          <Typography variant={smDown ? 'h5' : 'h3'} style={{ fontWeight: 550, textAlign: mdDown ? 'center' : 'left', paddingTop:smDown ? 60 :  130 }} color='initial'>{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify='center' alignContent='center' style={{ paddingTop: smDown ? 25 : 50 }}>
            <Grid item xs={11} sm={10} lg={5} style={{ paddingRight: mdDown ? 0 : 50 }}>
              <Typography variant={mdDown ? 'h6' : 'h5'} style={{ textAlign: mdDown ? 'center' : 'left' }} >{body}</Typography>
            </Grid>
            {mdDown ? null
              : <Grid item xs={5}>
                <div className='floating' style={{
                  position: "fixed",
                  backgroundImage: `url(${reading})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  height: 500,
                  width: 600,
                  right: 130,
                  top: 200,
                  float: 'right'
                }} />
              </Grid>}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Entry;
