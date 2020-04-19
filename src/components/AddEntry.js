import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import '../style.css'
import { Grid, Typography, Button, Dialog, DialogContent, TextField, TextareaAutosize, IconButton, CircularProgress } from '@material-ui/core';
import bgImg from '../formBackground.png'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function AddEntry({ addEntry, showSnackbar }) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [journalTitle, setJournalTilte] = React.useState('')
  const [journalContent, setJournalContent] = React.useState('')
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const generateEntry = () => {
    let date = new Date();
    let day = date.getDate()
    return {
      body: journalContent,
      title: journalTitle,
      date: {
        day: day < 10 ? '0' + day : day,
        month: date.toLocaleString('default', { month: 'short' }),
        year: date.getFullYear(),
        time: date.getTime(),
      }
    }
  }
  const closeDialog = () => {
    setIsDialogOpen(false)
  };

  return (
    <div>
      <div
        onClick={() => setIsDialogOpen(true)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: smDown ? 15 : 35,
          width: smDown ? 15 : 35,
          position: 'fixed',
          bottom: smDown ? 20 : 40,
          right: smDown ? 'calc(50% - 27.5px)' : 40,
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          color: '#F5F5F5',
          backgroundColor: 'rgb(82, 84, 170)',
          borderRadius: 100,
          padding: 20,
        }}>
        <AddIcon fontSize={smDown ? 'default' : 'large'} style={{ color: '#F5F5F5' }} />
      </div>
      <Dialog
        fullScreen
        onEscapeKeyDown={() => setIsDialogOpen(false)}
        open={isDialogOpen}>
        <DialogContent style={{ paddingLeft: smDown ? 20 : 50, backgroundColor: '#f4f6f8' }}>
          <IconButton onClick={() => setIsDialogOpen(false)} style={{ float: 'right', paddingRight: 15 }}>
            <CancelIcon style={{ color: '#5254aa', fontSize: smDown ? 30 : 60 }} />
          </IconButton>
          <Grid container justify='center'>
            <Grid item xs={11}  lg={5}>
              <Typography variant={smDown ? 'h6' : 'h5'} style={{ color: '#5254aa', fontWeight: 550, paddingBottom: smDown ? 10 : 20 }} >Title</Typography>
              <TextField
                onChange={(e) => setJournalTilte(e.target.value)}
                required
                variant='outlined'
                placeholder='Type your title here'
                id="title"
                type="text"
                fullWidth
                style={{ margin: 0, marginBottom : smDown ? 20 : 40, backgroundColor: 'white' }}
              />
              <Typography variant={smDown ? 'h6' : 'h5'} style={{ color: '#5254aa', fontWeight: 550, paddingBottom: smDown ? 10 : 20 }} >What's on your mind</Typography>
              <TextareaAutosize
                onChange={(e) => setJournalContent(e.target.value)}
                className='textArea' placeholder='Type Here...'
                style={{
                  borderRadius: 5,
                  minHeight: smDown ? 300 : 400,
                  width: 'calc(100% - 40px)',
                  padding: 20,
                  fontFamily: 'Roboto',
                  fontSize: 16,
                  backgroundColor: 'white'
                }} />
              <Button
                disabled={isLoading}
                onClick={() => {
                  addEntry(generateEntry()).then(() => {
                    showSnackbar('Entry created', 'success')
                    setIsLoading(false)
                    closeDialog()
                  })
                    .catch(error => {
                      showSnackbar(error.message, 'error')
                    })
                }}
                variant='contained'
                style={{ float: 'right', marginTop: 30, backgroundColor: '#5254aa', color: '#F5F5F5', fontSize: smDown ? 14 : 18 }}
              >
                {isLoading ? <CircularProgress size={20} style={{ color: 'white', padding: '5px 25px' }} /> : 'Submit'}
              </Button>
            </Grid>
            {mdDown ? null :
              <Grid item lg={6} style={{ paddingTop: 120, paddingLeft: 20 }}>
                <div style={{ 
                  backgroundImage: `url(${bgImg})`, 
                  backgroundSize: 'contain', 
                  backgroundRepeat : 'no-repeat', 
                  backgroundPosition: 'center', 
                  width: '100%', height: 400
                }} />
              </Grid>}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default AddEntry;