import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Main from './Main';
import SignUpPage from './components/SignUpPage';
import NavPcVersion from './components/NavPcVersion';
import AddEntry from './components/AddEntry';
import { Provider } from 'react-redux'
import Test from './components/Test'
import store from './reduxStore/store';

const createRoutes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavPcVersion />
      { /* entries.length ? <AddEntry /> : null */ }
      <Route exact path='/' component={Main}  />
      <Route exact path='/test' component={Test}  />
      <Route exact path='/signup' component={SignUpPage}  />
    </BrowserRouter>
  </Provider>
);

export default createRoutes;