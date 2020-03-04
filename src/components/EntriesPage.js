import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import '../style.css'
import EntryCardWrapper from './EntryCard.Wrapper'
import AddEntry from './AddEntry';
import firebaseApp from '../firebase'
import firebase from 'firebase/app'

function EntriesPage({ userName }) {

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  let [entries, setEntries] = React.useState([]);


  const getDocument = () => {
    let db = firebase.firestore(firebaseApp);
    db.collection('entries')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          return doc.id
        });
      })

  }
  const addDocument = () => {
    let db = firebase.firestore(firebaseApp);
    db.collection('entries')
      .add({
        title: 'story of my life',
        body: 'sfdadsssssssssssssssadscvawsdv'
      })
      .then(function (docRef) {
        console.log(docRef)
      })

  }

  const deleteDocument = () => {
    let db = firebase.firestore(firebaseApp);
    let docId = getDocument();
    db.collection('entries')
      .doc(docId)
      .delete()
      .then(function () {
        console.log('Document successfully deleted!')
      })
  }

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
        {/*<Button variant='contained' onClick={getDocument}>firebase</Button>
        <Button variant='contained' onClick={deleteDocument}>delete documnet </Button>*/}
        <AddEntry
          closeDialog={closeDialog}
          openDialog={openDialog}
          isDialogOpen={isDialogOpen}
          updateEntries={updateEntries}
        />
        {entries.length === 0 ? <img alt='empty' src="https://img.icons8.com/clouds/500/000000/folder-invoices.png" /> : null}
      </div>
      <Grid container justify='center' style={{ paddingTop: 60 }}>
        <Grid item xs={9} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {entries.map((x, i) => (
            <EntryCardWrapper key={i} object={x} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default EntriesPage;
