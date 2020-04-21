import React from 'react';
import { Grid, Divider, Avatar, Typography, Paper } from '@material-ui/core';
import defaultPic from '../assets/defaultProfilePic.svg'
import EditIcon from '@material-ui/icons/Edit';
import store from '../reduxStore/store'
import { emailToUsername } from '../services/helperFunctions'
import spaceFiller from '../assets/profileSpaceFiller.svg'
import { useHistory } from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Profile() {
  const history = useHistory()
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (

    <div>
      {store.getState().user.id ?

        mdDown ?
          <div style={{ minHeight: '100vh' }}>
            <div style={{ paddingTop: smDown ? 60 : 100 }}>
              <Avatar style={{ height: 140, width: 140, margin: '0px auto' }} src={defaultPic} />
              <Grid container justify='center' className='appBackground' style={{ paddingTop: 20 }}>
                <Grid item xs={11}>
                  <Grid container justify='center'>
                    <Grid item xs={10} sm={7} style={{ padding: '20px 0px' }}>
                      <Typography variant='h6'>Username</Typography>
                      <Paper elevation={3} style={{ width: '100%', display: 'flex', padding: '10 0' }}>
                        <Typography style={{ flexGrow: 1, padding: 10 }} >{emailToUsername(store.getState().user.email)}</Typography>
                        <EditIcon style={{ cursor: 'pointer', padding: 10 }} />
                      </Paper>
                    </Grid>
                    <Grid item xs={10} sm={7} style={{ padding: '20px 0px' }}>
                      <Typography variant='h6'>Email</Typography>
                      <Paper elevation={3} style={{ width: '100%', display: 'flex', padding: '10 0' }}>
                        <Typography style={{ flexGrow: 1, padding: 10 }} >{store.getState().user.email}</Typography>
                        <EditIcon style={{ cursor: 'pointer', padding: 10 }} />
                      </Paper>
                    </Grid>
                    <Grid item xs={10} sm={7} style={{ padding: '20px 0px' }}>
                      <Typography variant='h6'>Password</Typography>
                      <Paper elevation={3} style={{ width: '100%', display: 'flex', padding: '10 0' }} >
                        <Typography style={{ flexGrow: 1, padding: 10 }} >•••••••••••</Typography>
                        <EditIcon style={{ cursor: 'pointer', padding: 10 }} />
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>

          : <Grid container className='appBackground' style={{ minHeight: '100vh' }}>
            <Grid item sm={2} md={2} lg={3} style={{ padding: '100 0 30 0', display: 'flex', justifyContent: 'center' }}>
              <Avatar style={{ height: 200, width: 200, marginTop: 100 }} src={defaultPic} />
            </Grid>
            <Divider orientation='vertical' variant='middle' style={{ backgroundColor: '#dcdcdc', height: 600, marginTop: 80 }} />
            <Grid item sm={9} md={9} lg={7} xl={6} style={{ display: 'flex' }}>
              <Grid container style={{ display: 'block', padding: 50, paddingTop: 80 }}>
                <Grid item xs={4} style={{ padding: '20px 0px' }}>
                  <Typography style={{ paddingBottom: 5 }} variant='h6'>Username</Typography>
                  <Paper elevation={3} style={{ width: '100%', display: 'flex', padding: '10 0' }}>
                    <Typography style={{ flexGrow: 1, padding: 10 }} >{emailToUsername(store.getState().user.email)}</Typography>
                    <EditIcon style={{ cursor: 'pointer', padding: 10 }} />
                  </Paper>
                </Grid>
                <Grid item xs={4} style={{ padding: '20px 0px' }}>
                  <Typography style={{ paddingBottom: 5 }} variant='h6'>Email</Typography>
                  <Paper elevation={3} style={{ width: '100%', display: 'flex', padding: '10 0' }}>
                    <Typography style={{ flexGrow: 1, padding: 10 }} >{store.getState().user.email}</Typography>
                    <EditIcon style={{ cursor: 'pointer', padding: 10 }} />
                  </Paper>
                </Grid>
                <Grid item xs={4} style={{ padding: '20px 0px' }}>
                  <Typography style={{ paddingBottom: 5 }} variant='h6'>Password</Typography>
                  <Paper elevation={3} style={{ width: '100%', display: 'flex', padding: '10 0' }} >
                    <Typography style={{ flexGrow: 1, padding: 10 }} >•••••••••••</Typography>
                    <EditIcon style={{ cursor: 'pointer', padding: 10 }} />
                  </Paper>
                </Grid>
              </Grid>
              {mdDown ? null :
                <div style={{
                  position: 'fixed',
                  top: 250,
                  backgroundImage: `url(${spaceFiller})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: 350
                }} />}
            </Grid>
          </Grid>
        : history.push('/login')}
    </div>
  );
}

export default Profile;