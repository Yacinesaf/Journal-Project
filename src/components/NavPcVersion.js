import React, { useState } from 'react';
import { Toolbar, AppBar, Button, IconButton, Typography, Avatar } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link } from "react-router-dom";
import '../style.css'


function NavPcVersion() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AppBar style={{ backgroundColor: '#212121' }}>
      <Toolbar>
        <div style={{ display: 'flex', flexGrow: 1 }} >
          <MenuBookIcon />
          <Typography style={{ paddingTop: 1, paddingLeft: 10 }}>DailyLife</Typography>
        </div>
        <Button className='buttonStyle' >Contact</Button>
        <Button className='buttonStyle' style={{margin: '0px 20px'}}>About</Button>
        <Button className='buttonStyle' style={{marginRight: 20 }}>Sing in</Button>
        {isLoggedIn ? null :
          <Link to='/signup' style={{textDecoration : 'none'}}>
            <Button className='buttonStyle' variant='outlined' color='inherit' style={{ borderRadius: 4 }}>Get Started</Button>
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
