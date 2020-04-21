import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography, TextField, TextareaAutosize, Button } from '@material-ui/core';
import illustration from '../assets/contact.svg'


function Contact(props) {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Grid container justify='center' style={{ paddingTop: smDown ? 80 : 140 }}>
        <Grid item xs={11} md ={6} lg={5}>
          <Typography variant={smDown ? 'body1' : 'h6'} style={{ color: '#5254aa', fontWeight: 550, paddingBottom: smDown ? 5 : 10 }} >Your email</Typography>
          <TextField
            required
            variant='outlined'
            placeholder='Email'
            id="email"
            type="text"
            fullWidth
            style={{ margin: 0, marginBottom: smDown ? 10 : 15, backgroundColor: 'white' }}
          />
          <Typography variant={smDown ? 'body1' : 'h6'} style={{ color: '#5254aa', fontWeight: 550, paddingBottom: smDown ? 5 : 10 }} >Subject</Typography>
          <TextField
            required
            variant='outlined'
            placeholder='subject'
            id="topic"
            type="text"
            fullWidth
            style={{ margin: 0, marginBottom: smDown ? 10 : 15, backgroundColor: 'white' }}
          />
          <Typography variant={smDown ? 'body1' : 'h6'} style={{ color: '#5254aa', fontWeight: 550, paddingBottom: smDown ? 5 : 10 }} >Your message</Typography>
          <TextareaAutosize
            className='textArea' placeholder='Type Here...'
            style={{
              borderRadius: 5,
              minHeight: smDown ? 200 : 250,
              width: 'calc(100% - 40px)',
              padding: 20,
              fontFamily: 'Roboto',
              fontSize: 16,
              backgroundColor: 'white'
            }} />
          <Button
            fullWidth
            variant='contained'
            style={{ float: 'right', marginTop: 30, backgroundColor: '#5254aa', color: '#F5F5F5', fontSize: smDown ? 14 : 18, marginBottom : smDown ? 100 : 0 }}>
            Submit
          </Button>
        </Grid>
        {smDown ? null :
          <Grid item md={5} lg={6} style={{ paddingTop: 120, paddingLeft: mdDown ? 40 : 20 }}>
            <div style={{
              backgroundImage: `url(${illustration})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%', height: 400
            }} />
          </Grid>}
      </Grid>
    </div>
  );
}

export default Contact;