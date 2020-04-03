import React from 'react';
import EntriesPage from './components/EntriesPage';
import { Grid } from '@material-ui/core';
import './style.css'
function Main() {

  const buttonStyle = {
    textTransform: 'none',
    color: 'white'
  };

  return (
    <div>
      <Grid className='appBackground' container justify='center' style={{minHeight : '100vh', paddingTop : 64}}>
        <Grid item xs={12}>
          <EntriesPage buttonStyle={buttonStyle} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
