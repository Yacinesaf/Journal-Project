import React from 'react';
import NavPcVersion from './NavPcVersion';
import EntriesPage from './EntriesPage';
import { Grid } from '@material-ui/core';

function Main() {

  const buttonStyle = {
    textTransform: 'none',
    color: 'white'
  };

  return (
    <div>
      <NavPcVersion buttonStyle={buttonStyle} />
      <Grid container justify='center' style={{height : '100vh', paddingTop : 64, backgroundColor : '#F5F5F5'}}>
        <Grid item xs={12}>
          <EntriesPage buttonStyle={buttonStyle} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
