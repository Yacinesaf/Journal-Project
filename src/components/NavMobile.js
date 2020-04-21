import React, { Component } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Grid } from '@material-ui/core';
import { signOut } from '../services/apiEndpoints'
import store from '../reduxStore/store';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import MobileNavLoggedOut from './MobileNavLoggedOut';


class NavMobile extends Component {
  render() {
    const { history, location } = this.props;
    return (
      <div>
        {this.props.userId ?
          <div>
            {['/login', '/signup', '/landingPage'].includes(location.pathname) || (location.pathname === '/contact' && !this.props.userId) ? null
              :
              <div style={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                boxShadow: '0 -5px 5px -5px #3333',
                borderRadius: 4,
                backgroundColor: 'rgb(82, 84, 170)',
                height: 56,
                zIndex : 1,
              }} >
                <Grid container justify='center' alignItems='center' style={{ height: '100%' }}>
                  <Grid onClick={() => { history.push('/entries') }} item xs={2} style={{ padding: '8px 12px', textAlign: 'center' }}>
                    <MenuBookIcon style={{ color: 'white' }} />
                  </Grid>
                  <Grid onClick={() => { history.push('/profile') }} item xs={2} style={{ padding: '8px 12px', textAlign: 'center' }}>
                    <AccountCircleIcon style={{ color: 'white' }} />
                  </Grid>
                  <Grid item xs={3} style={{ padding: '8px 0px', textAlign: 'center' }}>
                  </Grid>
                  <Grid onClick={() => { history.push('/contact') }} item xs={2} style={{ padding: '8px 12px', textAlign: 'center' }}>
                    <ContactSupportIcon style={{ color: 'white' }} />
                  </Grid>
                  <Grid
                    onClick={() => signOut().then(() => {
                      store.dispatch({ type: 'LOG_OUT', payload: { id: null, email: '' } })
                      history.push('/login')
                    })}
                    item xs={2}
                    style={{ padding: '8px 12px', textAlign: 'center' }}>
                    <ExitToAppIcon style={{ color: 'white' }} />
                  </Grid>
                </Grid>
              </div>}

          </div>
          :
          <MobileNavLoggedOut />
        }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userId: state.user.id
})

export default connect(mapStateToProps)(withRouter(NavMobile));