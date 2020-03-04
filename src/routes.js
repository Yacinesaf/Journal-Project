import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Main from './Main';
import SignUpPage from './components/SignUpPage';
import NavPcVersion from './components/NavPcVersion';


const createRoutes = () => (
  <BrowserRouter>
    <NavPcVersion />
    <Route exact path='/' component={Main}  />
    <Route exact path='/signup' component={SignUpPage}  />
  </BrowserRouter>
);

export default createRoutes;