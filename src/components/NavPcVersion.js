import React from 'react';
import { Toolbar, AppBar, Button, IconButton, Typography, Avatar, Menu, MenuItem } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import { signOut } from '../services/apiEndpoints'
import defaultPic from '../assets/defaultProfilePic.svg'
import '../style.css'
import store from '../reduxStore/store';


function NavPcVersion({ userId, profilePic }) {
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <AppBar style={{ backgroundColor: '#212121' }}>
      <Toolbar>
        <Link to='/' style={{ textDecoration: 'none', color: 'white', display: 'flex', flexGrow: 1, alignItems: 'center' }}>
          <img style={{ width: 40, height: 40 }} alt='logo' src="data:image/png;base64,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" />
          <Typography variant='body1' style={{ paddingTop: 1, paddingLeft: 10 }}>Slice Of Life</Typography>
        </Link>
        <Button className='buttonStyle' >Contact</Button>
        {userId ? null :
          <div>
            <Button className='buttonStyle' style={{ margin: '0px 20px' }}>About</Button>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <Button className='buttonStyle' style={{ marginRight: 20 }}>Sing in</Button>
            </Link>

            <Link to='/signup' style={{ textDecoration: 'none' }}>
              <Button className='buttonStyle' variant='outlined' color='inherit' style={{ borderRadius: 4 }}>Get Started</Button>
            </Link>
          </div>
        }
        {userId ?
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Avatar src={profilePic ? profilePic : defaultPic} />
          </IconButton> : null}
        <Menu
          anchorEl={anchorEl}
          elevation={4}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
          <MenuItem onClick={() => setAnchorEl(null)} style={{ display: 'felx', alignItems: 'center', padding: 10 }}>
            <PersonIcon style={{ paddingRight: 17 }} />
            <Link to='/profile' style={{ textTransform: 'none', color: 'black', textDecoration: 'none' }}>
              <Typography style={{ flexGrow: 1 }} variant='caption'>Profile</Typography>
            </Link>
          </MenuItem>
          <MenuItem
            style={{ display: 'felx', alignItems: 'center', padding: 10 }}
            onClick={() => signOut().then(() => {
              store.dispatch({type : 'LOG_OUT', payload : {id : null, email : ''}})
              history.push('/login')
              setAnchorEl(null)
            })} >
            <ExitToAppIcon style={{ paddingRight: 10 }} />
            <Typography variant='caption' >Sign out</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavPcVersion;
