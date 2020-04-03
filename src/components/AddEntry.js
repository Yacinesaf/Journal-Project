import React, { Component } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import '../style.css'
import { connect } from 'react-redux'
import { Grid, Typography, Button, Dialog, DialogContent, TextField, TextareaAutosize, IconButton, Snackbar, CircularProgress } from '@material-ui/core';
import bgImg from '../formBackground.png'
import { addEntry } from '../reduxStore/actions.js'
import Alert from '@material-ui/lab/Alert';


class AddEntry extends Component {
  constructor() {
    super()
    this.state = {
      journalTitle: '',
      journalContent: '',
      isDialogOpen: false,
      showSnackbar: false,
      isLoading: false
    }
  }

  generateEntry() {
    let date = new Date();
    let day = date.getDate()
    return {
      body: this.state.journalContent,
      title: this.state.journalTitle,
      date: {
        day: day < 10 ? '0' + day : day,
        month: date.toLocaleString('default', { month: 'short' }),
        year: date.getFullYear(),
        time: date.getTime(),
      }
    }
  }

  closeDialog() {
    this.setState({ isDialogOpen: false });
  };
  render() {
    console.log();
    return (
      <div>
        <Button
          onClick={() => this.setState({ isDialogOpen: true })}
          variant='contained'
          color='inherit'
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
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
          onEscapeKeyDown={() => this.setState({ isDialogOpen: false })}
          open={this.state.isDialogOpen}
        >
          <DialogContent style={{ paddingLeft: 50, backgroundColor: '#f4f6f8' }}>
            <IconButton onClick={() => this.setState({ isDialogOpen: false })} style={{ float: 'right', paddingRight: 15 }}>
              <CancelIcon style={{ color: '#5254aa', fontSize: 60 }} />
            </IconButton>
            <Grid container justify='center'>
              <Grid item xs={5}>
                <Typography variant='h5' style={{ color: '#5254aa', fontWeight: 550, paddingBottom: 20 }} >Title</Typography>
                <TextField
                  onChange={(e) => this.setState({ journalTitle: e.target.value })}
                  required
                  variant='outlined'
                  placeholder='Type your title here'
                  id="title"
                  type="text"
                  fullWidth
                  style={{ margin: '0px 0px 40px', backgroundColor: 'white' }}
                />
                <Typography variant='h5' style={{ color: '#5254aa', fontWeight: 550, paddingBottom: 20 }} >What's on your mind</Typography>
                <TextareaAutosize onChange={(e) => this.setState({ journalContent: e.target.value })} className='textArea' placeholder='Type Here...' style={{ borderRadius: 5, minHeight: 400, width: 'calc(100% - 40px)', padding: 20, fontFamily: 'Roboto', fontSize: 16, backgroundColor: 'white' }} />
                <Button
                  disabled={this.state.isLoading}
                  onClick={() => {
                    this.setState({ isLoading: true })
                    this.props.addEntry(this.generateEntry()).then(() => {
                      this.setState({ isLoading: false })
                      this.closeDialog()
                      this.setState({ showSnackbar: true })
                    });
                  }}
                  variant='contained'
                  style={{ float: 'right', marginTop: 30, backgroundColor: '#5254aa', color: '#F5F5F5', fontSize: 18 }}
                >
                  {this.state.isLoading ? <CircularProgress size={20} style={{ color: 'white', padding: '5px 25px' }} /> : 'Submit'}
                </Button>
              </Grid>
              <Grid item xs={6} style={{ paddingTop: 120, paddingLeft: 20 }}>
                <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 400 }} />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <Snackbar open={this.state.showSnackbar} autoHideDuration={2000} severity='success' onClose={() => this.setState({ showSnackbar: false })} >
          <Alert variant='filled' severity='success'>
            Entry Added !
          </Alert>
        </Snackbar>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  entries: state.entries.entriesList,
})

export default connect(mapStateToProps, { addEntry })(AddEntry)