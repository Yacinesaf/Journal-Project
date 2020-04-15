import React from 'react';
import { Grid, Divider, Avatar, Typography, Paper } from '@material-ui/core';
import defaultPic from '../assets/defaultProfilePic.svg'
import EditIcon from '@material-ui/icons/Edit';

function Profile() {
  return (
    <div>
      <Grid container className='appBackground' style={{ minHeight: '100vh', paddingTop: 64 }}>
        <Grid item xs={3} style={{ padding: 50, paddingRight: 0 }}>
          <Avatar style={{ height: 250, width: 250 }} src={defaultPic} />
        </Grid>
        <Divider orientation='vertical' variant='middle' style={{ backgroundColor: '#dcdcdc', height: 600, marginTop: 80 }} />
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant='h6'>Username</Typography>
              <Paper elevation='3' style={{ width: '100%', display: 'flex' }} />
              <Typography>{username}</Typography>
              <EditIcon />
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h6'>Email</Typography>
              <Paper elevation='3' style={{ width: '100%', display: 'flex' }} />
              <Typography>{email}</Typography>
              <EditIcon /
            </Grid>
            <Grid item xs={4}>
                <Typography variant='h6'>Password</Typography>
                <Paper elevation='3' style={{ width: '100%', display: 'flex' }} />
                <Typography></Typography>
                <EditIcon /
            </Grid>
          </Grid>
            </Grid>
          </Grid>
    </div>
  );
}

export default Profile;