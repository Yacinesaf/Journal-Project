import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function SignUpPage() {


  const [showingPassword, setShowingPassword] = useState(false);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [password, setPassword] = useState('444444444')
  const [email, setEmail] = useState('44444@FF.COM')
  const passwordErrorMsg = 'Password needs to be at least 6 characters';
  const emailErrorMsg = 'Invalid Email';


  const isEmailValid = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const isPasswordValid = (password) => {
    return password.length >= 6
  }
  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const isFormValid = () => {
    return isEmailValid(email) && checkBoxChecked && isPasswordValid(password)
  }


    return (
      <div style={{ background: 'linear-gradient(to right, #000000, #434343)', height: "100vh" }}>

        <Grid container direction="row" justify='center' alignItems="center" style={{ height: '100%' }}>

          <Grid item xs={11} sm={8} lg={6} xl={3} style={{display : 'flex', justifyContent : 'center'}}>
          
            <Card style={{ maxWidth: '365px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding : 30}} elevation={10}>

              <Avatar style={{ backgroundColor: '#212121', marginBottom : 12 }}  >
                <LockOutlinedIcon />
              </Avatar>

              <Typography align='center' variant='h5'>
                Sign Up
              </Typography>

              <form style={{ width: '100%' }}>

                <TextField
                  error={!isEmailValid(email)}
                  helperText={isEmailValid(email) ? '' : emailErrorMsg}
                  onChange={changeEmail}
                  id="outlined-basicc"
                  style={{margin : '24px 0px'}}
                  fullWidth={true} label="Email Address"
                  variant="outlined" />

                <TextField
                  onChange={changePassword}
                  error={!isPasswordValid(password)}
                  helperText={!isPasswordValid(password) ? passwordErrorMsg : ''}
                  InputProps={{
                    endAdornment: <InputAdornment onClick={() => setShowingPassword(!showingPassword)}>
                      {showingPassword
                        ? <VisibilityOffIcon style={{ cursor: 'pointer' }} />
                        : <VisibilityIcon style={{ cursor: 'pointer' }} />}
                    </InputAdornment>
                  }}
                  type={showingPassword ? 'text' : 'password'}
                  id="outlined-basic"
                  style={{marginBottom : 24}}
                  fullWidth={true} label="Password"
                  variant="outlined" />

                <FormControlLabel
                  onClick={(e) => { e.preventDefault(); setCheckBoxChecked(!checkBoxChecked)}}
                  style={{ marginBottom: 24 }}
                  control={<Checkbox style={{ color: checkBoxChecked ? '#212121' : '' }} checked={checkBoxChecked} />}
                  label="Accept the terms & conditions" />

              </form>

              <Button
                onClick={() => {setShowSnackBar(true)}}
                disabled={!isFormValid()}
                fullWidth={true}
                variant="contained"
                style={{ backgroundColor: isFormValid() ? '#212121' : '', color: isFormValid() ? 'white' : '' }}
                size='large'>
                Sign Up
              </Button>
              <Snackbar
                onClose={() => {setShowSnackBar(false)}}
                open={showSnackBar}
                autoHideDuration={3000}>
                <Alert elevation={6} variant="filled" severity={isEmailValid() ? "error" : "succes"}>
                  {isEmailValid ? 'You are Signed In !' : 'Incorrect inputs'}
                </Alert>
              </Snackbar>
            </Card>

          </Grid>

        </Grid>

      </div>
    )
  }
export default SignUpPage