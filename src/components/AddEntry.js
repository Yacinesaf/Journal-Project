import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import '../style.css'
import { Grid, Typography, Button, Dialog, DialogContent, TextField, TextareaAutosize, IconButton } from '@material-ui/core';
import bgImg from '../formBackground.png'

function AddEntry({ isDialogOpen, closeDialog, openDialog, updateEntries }) {

  const [journalTitle, setJouranlTitle] = useState('');
  const [journalContent, setJouranlContent] = useState('');
  const entries = [];
  const generateEntry = () => {
    let date = new Date();
    return {
      title: journalTitle,
      body: journalContent,
      date: date.getDate(),
      month: date.toLocaleString('default', { month: 'long' }),
      year: date.getFullYear(),
    }
  }

  return (
    <div>
      <Button
        onClick={openDialog}
        variant='contained'
        color='inherit'
        style={{
          position: entries.length ? 'fixed' : '',
          bottom: entries.length ? '40px' : '',
          right: entries.length ? '40px' : '',
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
        onEscapeKeyDown={closeDialog}
        open={isDialogOpen}
      >
        <DialogContent style={{ paddingLeft: 50, backgroundColor: '#f4f6f8' }}>
          <IconButton onClick={closeDialog} style={{ float: 'right', paddingRight: 15 }}>
            <CancelIcon fontSize='large' style={{ color: '#5254aa' }} />
          </IconButton>
          <Grid container justify='center'>
            <Grid item xs={5}>
              <Typography variant='h5' style={{ color: '#5254aa', fontWeight: 550, paddingBottom: 20 }} >Title</Typography>
              <TextField
                onChange={(e) => setJouranlTitle(e.target.value)}
                required
                variant='outlined'
                placeholder='Type your title here'
                id="title"
                type="text"
                fullWidth
                style={{ margin: '0px 0px 40px', backgroundColor: 'white' }}
              />
              <Typography variant='h5' style={{ color: '#5254aa', fontWeight: 550, paddingBottom: 20 }} >What's on your mind</Typography>
              <TextareaAutosize onChange={(e) => setJouranlContent(e.target.value)} className='textArea' placeholder='Type Here...' style={{ borderRadius: 5, minHeight: 480, width: 'calc(100% - 40px)', padding: 20, fontFamily: 'Roboto', fontSize: 16, backgroundColor: 'white' }} />
              <Button onClick={() => {
                closeDialog();
                updateEntries(generateEntry())
              }} variant='contained' style={{ float: 'right', marginTop: 30, backgroundColor: '#5254aa', color: '#F5F5F5', fontSize: 18 }}>Submit</Button>
            </Grid>
            <Grid item xs={6} style={{padding : 20}}>
              <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', width : '100%', height : 400 }} />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddEntry;