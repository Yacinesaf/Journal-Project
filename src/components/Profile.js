import React from 'react';
import { Grid, Divider, Avatar, Typography, Paper } from '@material-ui/core';
import defaultPic from '../assets/defaultProfilePic.svg'
import EditIcon from '@material-ui/icons/Edit';
import store from '../reduxStore/store'
import { emailToUsername } from '../services/helperFunctions'
import spaceFiller from '../assets/profileSpaceFiller.svg'

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Profile() {

  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  return (
    <div>
      <Grid container className='appBackground' style={{ minHeight: '100vh', paddingTop: 64 }}>
        <Grid item xs={3} style={{ paddingTop: 60, display: 'flex', justifyContent: 'center' }}>
          <Avatar style={{ height: 250, width: 250 }} src={defaultPic} />
        </Grid>
        <Divider orientation='vertical' variant='middle' style={{ backgroundColor: '#dcdcdc', height: 600, marginTop: 80 }} />
        <Grid item xs={8} style={{ display: 'flex' }}>
          <Grid container style={{ display: 'block', padding: 50, paddingTop: 80 }}>
            <Grid item xs={4} style={{ padding: '20px 0px' }}>
              <Typography style={{ paddingBottom: 10 }} variant='h6'>Username</Typography>
              <Paper elevation='3' style={{ width: '100%', display: 'flex', padding: 10 }}>
                <Typography style={{ flexGrow: 1 }} >{emailToUsername(store.getState().user.email)}</Typography>
                <EditIcon style={{ cursor: 'pointer' }} />
              </Paper>
            </Grid>
            <Grid item xs={4} style={{ padding: '20px 0px' }}>
              <Typography style={{ paddingBottom: 10 }} variant='h6'>Email</Typography>
              <Paper elevation='3' style={{ width: '100%', display: 'flex', padding: 10 }}>
                <Typography style={{ flexGrow: 1 }} >{store.getState().user.email}</Typography>
                <EditIcon style={{ cursor: 'pointer' }} />
              </Paper>
            </Grid>
            <Grid item xs={4} style={{ padding: '20px 0px' }}>
              <Typography style={{ paddingBottom: 10 }} variant='h6'>Password</Typography>
              <Paper elevation='3' style={{ width: '100%', display: 'flex', padding: 10 }} >
                <Typography style={{ flexGrow: 1 }} >•••••••••••</Typography>
                <EditIcon style={{ cursor: 'pointer' }} />
              </Paper>
            </Grid>
          </Grid>
          <div style={{
            position: 'fixed',
            top: 250,
            backgroundImage: `url(${spaceFiller})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: 350
          }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;