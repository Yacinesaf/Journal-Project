import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import '../style.css'
import { Link, useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function SignPage({ setUser, loginAction, showSnackbar }) {

  let history = useHistory();
  let location = useLocation();
  const [showingPassword, setShowingPassword] = useState(false);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const [password, setPassword] = useState('444444444')
  const [email, setEmail] = useState('44444@FF.COM')
  const passwordErrorMsg = 'Password needs to be at least 6 characters';
  const emailErrorMsg = 'Invalid Email';


  const isEmailValid = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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


  return (
    <div className='appBackground' style={{ height: "100vh" }}>
      <Grid container direction="row" justify='center' alignItems="center" style={{ height: '100%' }}>
        <Grid item xs={11} sm={8} lg={6} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <Card style={{ maxWidth: '365px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 30 }} elevation={10}>
            <Avatar style={{ backgroundColor: '#212121', marginBottom: 12 }}  >
              <LockOutlinedIcon />
            </Avatar>
            <Typography align='center' variant='h5'>
              {location.pathname === '/signup' ? 'Sign Up' : 'Sign In'}
            </Typography>
            <form style={{ width: '100%' }}>
              <TextField
                error={!isEmailValid(email)}
                helperText={isEmailValid(email) ? '' : emailErrorMsg}
                onChange={changeEmail}
                id="email"
                style={{ margin: '24px 0px' }}
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
                id="password"
                style={{ marginBottom: 24 }}
                fullWidth={true} label="Password"
                variant="outlined" />
              {location.pathname === '/signup' ?
                <FormControlLabel
                  onClick={(e) => { e.preventDefault(); setCheckBoxChecked(!checkBoxChecked) }}
                  style={{ marginBottom: 24 }}
                  control={<Checkbox style={{ color: checkBoxChecked ? '#212121' : '' }} checked={checkBoxChecked} />}
                  label="Accept the terms & conditions" />
                : null}
            </form>
            <Button
              onClick={() => {
                if (location.pathname === '/signup') {
                  setUser(email, password)
                    .then(res => {
                      showSnackbar('Successfully signed up', 'success')
                      history.push("/entries")
                    })
                    .catch(error => {
                      showSnackbar(error.message, 'error')
                    })
                } else {
                  loginAction(email, password)
                    .then(res => {
                      showSnackbar('Successfully signed in', 'success')
                      history.push("/entries")
                    })
                    .catch(error => {
                      showSnackbar(error.message, 'error')
                    })
                }
              }}
              fullWidth={true}
              variant="contained"
              style={{ backgroundColor: '#212121', color: 'white' }}
              size='large'>
              {location.pathname === '/signup' ? 'Sign Up' : 'Sign In'}
            </Button>
            {location.pathname === '/signup' ?
              <Link to='/signin' style={{ width: '100%', color: 'black', paddingTop: 15, textAlign: 'right' }}>
                <Typography variant='caption'>Already have an account ?</Typography>
              </Link>
              : null}
          </Card>
        </Grid>
      </Grid>

    </div>
  )
}

export default SignPage