import React from 'react';
import { Typography } from '@material-ui/core';
import './css.css'
import EntryComponent from './EntryComponent'
import AddEntry from './AddEntry';


function EntriesPage({ userName }) {

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  let [entries, setEntries] = React.useState([]);


  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const updateEntries = (element) => {
    setEntries((prevState) => {
      prevState.push(element);
      return prevState
    })
  }


  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ widht: '100%', textAlign: 'center' }}>
        <Typography variant='h2' style={{ color: '#212121', textAlign: 'center', paddingTop: 100, fontWeight: 400 }}>{`Welcome ${userName}!`}</Typography>
        <AddEntry 
        closeDialog={closeDialog} 
        openDialog={openDialog} 
        isDialogOpen={isDialogOpen} 
        updateEntries={updateEntries}
        />
        {entries.length === 0 ? <img alt='empty' src="https://img.icons8.com/clouds/500/000000/folder-invoices.png" /> : null}
      </div>
      {entries.map((x,i) => (
        <EntryComponent key={i} object={x} />
      ))}
    </div>
  );
}

export default EntriesPage;
