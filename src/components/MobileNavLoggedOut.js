import React from 'react';
import logoColored from '../assets/logoColored.png'
import { useLocation, useHistory } from 'react-router'
import { IconButton, Slide, Paper, List, ListItem, Divider } from '@material-ui/core';
import logo from '../assets/logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function MobileNavLoggedOut() {
  const location = useLocation()
  const history = useHistory()
  const [showSlideMenu, setShowSlideMenu] = React.useState(false)

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flexGrow: 1 }}>
        <img style={{ width: 40, height: 40, padding: '12px 0px 0px 24px', position: 'absolute' }} alt='logo' src={location.pathname === '/' ? logo : logoColored} />
      </div>
      <IconButton onClick={() => setShowSlideMenu(true)} style={{ padding: '16px 24px 0px 0px  ' }}>
        <MenuIcon style={{ color: 'rgb(82, 84, 170)' }} />
      </IconButton>
      <Slide
        onExited={() => setShowSlideMenu(false)}
        style={{ position: "absolute", width: '100%', zIndex: 1 }}
        direction='down'
        in={showSlideMenu}
        timeout={200}
      >
        <Paper style={{ backgroundColor: 'rgb(82, 84, 170)' }}>
          <List style={{ padding: 0 }}>
            <ListItem style={{ padding: '12px 24px' }}>
              <div style={{ flexGrow: 1 }}>
                <img onClick={()=> history.push('/')} alt='logo' src={logo} style={{ width: 40, height: 40 }} />
              </div>
              <CloseIcon onClick={() => setShowSlideMenu(false)} style={{ color: 'white' }} />
            </ListItem>
            <Divider variant='fullWidth' style={{ backgroundColor: '#dbdbdb' }} />
            <ListItem onClick={()=> history.push('/signup')} style={{ padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
              <p style={{ color: 'white', fontWeight: 100, margin: 0, fontSize: 12 }}>
                Sign up
              </p>
            </ListItem>
            <Divider variant='fullWidth' style={{ backgroundColor: '#dbdbdb' }} />
            <ListItem onClick={()=> history.push('/login')} style={{ padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
              <p style={{ color: 'white', fontWeight: 100, margin: 0, fontSize: 12 }}>
                Login
              </p>
            </ListItem>
            <Divider variant='fullWidth' style={{ backgroundColor: '#dbdbdb' }} />
            <ListItem onClick={()=> history.push('/contact')} style={{ padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
              <p style={{ color: 'white', fontWeight: 100, margin: 0, fontSize: 12 }}>
                Contact
              </p>
            </ListItem>
            <Divider variant='fullWidth' style={{ backgroundColor: '#dbdbdb' }} />
            <ListItem onClick={()=> history.push('/about')} style={{ padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
              <p style={{ color: 'white', fontWeight: 100, margin: 0, fontSize: 12 }}>
                About us
              </p>
            </ListItem>
          </List>
        </Paper>
      </Slide>
    </div>
  );
}

export default MobileNavLoggedOut;

