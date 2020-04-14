import React from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router'
import firebase from 'firebase'
import SignPageWrapper from './components/SignPageWrapper';
import store from './reduxStore/store';
import EntryWrapper from './components/EntryWrapper';
import LandingPage from './components/LandingPage';
import SnackbarComp from './components/SnackbarComp';
import EntriesPageWrapper from './components/EntriesPageWrapper';
import NavPcVersionWrapper from './components/NavPcVersionWrapper';
import AddEntryWrapper from './components/AddEntryWrapper';
import loadingImg from './assets/loading.svg'

function Routes() {
  let [changedPath, setChangedPath] = React.useState(false)
  let [isLoading, setIsLoading] = React.useState(true)
  let history = useHistory()
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      store.dispatch({ type: 'SET_USER', payload: { id: user.uid, email: user.email } })
      if (!changedPath) {
        history.push('/entries')
        setChangedPath(true)
      }
    } else {
      if (!changedPath) {
        history.push('/login')
      }
    }
    setIsLoading(false)
  });
  return (
    <div
      className='appBackground'
      style={isLoading ? {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
        : {}}>
      {isLoading ?
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: `url(${loadingImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            height: 500,
            width: 500,
            backgroundRepeat: 'no-repeat'

          }} /> :
        <div>
          <NavPcVersionWrapper />
          <AddEntryWrapper />
          <SnackbarComp />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/entries' component={EntriesPageWrapper} />
          <Route exact path='/entries/:id' component={EntryWrapper} />
          <Route exact path='/signup' component={SignPageWrapper} />
          <Route exact path='/login' component={SignPageWrapper} />
        </div>}

    </div>
  );
}
export default Routes;


