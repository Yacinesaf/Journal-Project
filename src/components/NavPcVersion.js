import React, { useState } from 'react';
import { Toolbar, AppBar, Button, IconButton, Typography, Avatar } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link } from "react-router-dom";
function NavPcVersion({ buttonStyle }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AppBar style={{ backgroundColor: '#212121' }}>
      <Toolbar>
        <div style={{ display: 'flex', flexGrow: 1 }} >
          <MenuBookIcon />
          <Typography style={{ paddingTop: 1, paddingLeft: 10 }}>DailyLife</Typography>
        </div>
        <Button style={buttonStyle}>Contact</Button>
        <Button style={Object.assign({}, buttonStyle, { margin: '0px 20px' })}>About</Button>
        <Button style={Object.assign({}, buttonStyle, { marginRight: 20 })}>Sing in</Button>
        {isLoggedIn ? null :
          <Link to='/Get-started'>
            <Button variant='outlined' color='inherit' style={Object.assign({}, buttonStyle, { borderRadius: 4 })}>Get Started</Button>
          </Link>}
        {isLoggedIn ?
          <IconButton>
            <Avatar />
          </IconButton> : null}

      </Toolbar>
    </AppBar>
  );
}

export default NavPcVersion;
