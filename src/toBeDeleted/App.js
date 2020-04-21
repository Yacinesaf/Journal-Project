import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../reduxStore/store';

import SnackbarComp from '../components/SnackbarComp';
import NavPcVersionWrapper from '../components/NavPcVersionWrapper';
import AddEntryWrapper from '../components/AddEntryWrapper';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <NavPcVersionWrapper />
        <AddEntryWrapper />
        <SnackbarComp />
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;