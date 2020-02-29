import React from 'react';
import { Grid, Typography, Button, Dialog, DialogActions, DialogContent, TextField, TextareaAutosize, Slide, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './css.css'
import CancelIcon from '@material-ui/icons/Cancel';
import emptyState from './emptyState.svg'

function LoggedInPage({ userName }) {

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const [journalTitle, setJouranlTitle] = React.useState('');
  const [journalContent, setJouranlContent] = React.useState('');


  return (
    <div style={{textAlign : 'center'}}>
      <div style={{ widht: '100%', textAlign: 'center' }}>
        <Typography variant='h2' style={{ color: '#212121', textAlign: 'center', paddingTop: 100, fontWeight : 400 }}>{`Welcome ${userName}!`}</Typography>
        <Button
          onClick={handleClickOpen}
          variant='contained'
          color='inherit'
          style={{
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            marginTop: 30,
            color: '#F5F5F5',
            backgroundColor: '#212121',
            borderRadius: 100,
            textTransform: 'none',
            fontSize: 25,
            padding: 20,
          }}>
          <AddIcon fontSize='large' style={{ color: '#F5F5F5' }} />
        </Button>
        <Dialog
          fullScreen
          onBackdropClick={handleClose}
          open={openDialog}
          style={{ backgroundColor: '#F5F5F5' }}
        >
          <DialogContent style={{ padding: 0 }}>
            <IconButton onClick={handleClose} style={{ float: 'right', paddingRight: 15 }}>
              <CancelIcon fontSize='large' style={{ color: '#212121' }} />
            </IconButton>
            <Grid container justify='center'>
              <Grid item xs={10}>
                <Typography variant='h5' style={{ color: '#212121', fontWeight: 550, paddingBottom: 20 }} >Title</Typography>
                <TextField
                  onChange={(e) => setJouranlTitle(e.target.value)}
                  required
                  variant='outlined'
                  placeholder='Type your title here'
                  id="title"
                  type="text"
                  fullWidth
                  style={{ margin: '0px 0px 40px' }}
                />
                <Typography variant='h5' style={{ color: '#212121', fontWeight: 550, paddingBottom: 20 }} >Write Your Day</Typography>
                <TextareaAutosize onChange={(e) => setJouranlContent(e.target.value)} className='textArea' placeholder='Type Here...' style={{ borderRadius: 5, minHeight: 480, width: 'calc(100% - 40px)', padding: 20, fontFamily: 'Roboto', fontSize: 16 }} />
                <Button onClick={handleClose} variant='contained' style={{ float: 'right', marginTop: 30, backgroundColor: '#212121', color: '#F5F5F5', fontSize: 18 }}>Submit</Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
      <img alt='empty' src="https://img.icons8.com/clouds/500/000000/folder-invoices.png" />
    </div>
  );
}

export default LoggedInPage;
