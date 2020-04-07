import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignPage from './components/SignPage';
import NavPcVersion from './components/NavPcVersion';
import AddEntry from './components/AddEntry';
import { Provider } from 'react-redux'
import Test from './components/Test'
import store from './reduxStore/store';
import EntryWrapper from './components/EntryWrapper';
import EntriesPage from './components/EntriesPage';
import LandingPage from './components/LandingPage';

const createRoutes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavPcVersion />
      <AddEntry />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/entries' component={EntriesPage} />
      <Route exact path='/entries/:id' component={EntryWrapper} />
      <Route exact path='/test' component={Test} />
      <Route exact path='/signup' component={SignPage} />
      <Route exact path='/signin' component={SignPage} />
    </BrowserRouter>
  </Provider>
);
export default createRoutes;