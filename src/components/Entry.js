import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import '../style.css'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom'

function Entry({ title, body, reading }) {
  const history = useHistory()
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <ArrowBackIosIcon
        onClick={() => history.push('/entries')}
        fontSize='large'
        style={{
          color: 'rgb(82, 84, 170)',
          paddingLeft: 25,
          position: "absolute",
          top: smDown ? 30 : 100,
          cursor: 'pointer'
        }} />
      <Grid className='appBackground' container justify='center' alignContent='flex-start' style={{ minHeight: '100vh', backgroundColor: '#f2f2f2' }}>
        <Grid item xs={11} md={10} >
          <Typography variant={mdDown ? 'h4' : 'h3'} style={{ fontWeight: 550, textAlign: mdDown ? 'center' : 'left', paddingTop: 130 }} color='initial'>{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify='center' alignContent='center' style={{ paddingTop: 50 }}>
            <Grid item xs={11} sm={10} lg={5} style={{ paddingRight: mdDown ? 0 :  50 }}>
              <Typography variant={mdDown ? 'h5' : 'h4'} style={{ textAlign: mdDown ? 'center' : 'left' }} >{body}</Typography>
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
