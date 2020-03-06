import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Main from './Main';
import SignUpPage from './components/SignUpPage';
import NavPcVersion from './components/NavPcVersion';
import EntriesStore from './store/entries'
import AddEntry from './components/AddEntry';

const entries = EntriesStore.getAll();
const createRoutes = () => (
  
  <BrowserRouter>
    <NavPcVersion />
    {entries.length ? <AddEntry /> : null}
    <Route exact path='/' component={Main}  />
    <Route exact path='/signup' component={SignUpPage}  />
  </BrowserRouter>
);

export default createRoutes;