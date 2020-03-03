import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Main from './Main';
import SignUpPage from './components/SignUpPage';

const createRoutes = () => (
  <BrowserRouter>
    <Route exact path='/home' component={Main}  />
    <Route exact path='/Get-started' component={SignUpPage}  />
  </BrowserRouter>
);

export default createRoutes;