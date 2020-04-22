import React from 'react';
import { Toolbar, AppBar, Button, IconButton, Typography, Avatar, Menu, MenuItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import { Link, useLocation } from "react-router-dom";
import { signOut } from '../services/apiEndpoints'
import store from '../reduxStore/store';
import defaultPic from '../assets/defaultProfilePic.svg'
import '../style.css'
import logo from '../assets/logo.png'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function NavPcVersion({ userId, profilePic }) {
  const scrolledDown = useScrollTrigger({ threshold: 650 });
  let location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div>
      <AppBar
        elevation={location.pathname === '/' ? 0 : 4}
        color={location.pathname === '/' && !scrolledDown ? 'transparent' : 'inherit'}
        style={location.pathname === '/' && !scrolledDown ? { paddingTop: 10 } : { backgroundColor: 'rgb(82, 84, 170)' }}>
        <Toolbar>
          <Link to='/' style={{ textDecoration: 'none', color: 'white', display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            <img style={{ width: 40, height: 40 }} alt='logo' src={logo} />
            <Typography style={{ color: 'white', paddingLeft: 5 }} >Slice Of Life</Typography>
          </Link>
          {userId ? <Link to='/entries' style={{ textDecoration: 'none' }}>
            <Button className='buttonStyle'>Entries</Button>
          </Link> : null}
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <Button className='buttonStyle' >Contact</Button>
          </Link>
          {userId ? null :
            <div>
              <Link to='/aboutus' style={{ textDecoration: 'none' }}>
                <Button className='buttonStyle' style={{ margin: '0px 20px' }}>About</Button>
              </Link>
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
        </Toolbar>
      </AppBar>
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
        <Link to='/profile' style={{ textTransform: 'none', color: 'black', textDecoration: 'none' }}>
          <MenuItem onClick={() => setAnchorEl(null)} style={{ display: 'felx', alignItems: 'center', padding: 10 }}>
            <PersonIcon style={{ paddingRight: 17 }} />
            <Typography variant='caption'>Profile</Typography>
          </MenuItem>
        </Link>
        <MenuItem
          style={{ display: 'felx', alignItems: 'center', padding: 10 }}
          onClick={() => signOut().then(() => {
            store.dispatch({ type: 'LOG_OUT', payload: { id: null, email: '' } })
            setAnchorEl(null)
          })} >
          <ExitToAppIcon style={{ paddingRight: 10 }} />
          <Typography variant='caption' >Sign out</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavPcVersion;
