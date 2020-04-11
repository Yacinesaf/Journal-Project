import React, { useState } from 'react'
import { Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Card } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import signState from '../assets/loginAsset.svg'
import { Link, useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import '../style.css'

function SignPage({ setUser, loginAction, showSnackbar }) {

  let history = useHistory();
  let location = useLocation();
  const [showingPassword, setShowingPassword] = useState(false);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)
  const passwordErrorMsg = 'Password needs to be at least 6 characters';
  const emailErrorMsg = 'Invalid Email';


  const isEmailValid = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !!email && re.test(email);
  }

  const isPasswordValid = (password) => {
    return !!password && password.length >= 6
  }
  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const isFormValid = (email, password) => {
    return isPasswordValid(password) && isEmailValid(email)
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
                error={email !== null && !isEmailValid(email)}
                helperText={email !== null && !isEmailValid(email) ? emailErrorMsg : ''}
                onChange={changeEmail}
                id="email"
                style={{ margin: '24px 0px' }}
                fullWidth={true} label="Email Address"
                variant="outlined" />
              <TextField
                onChange={changePassword}
                error={password !== null && !isPasswordValid(password)}
                helperText={password !== null && !isPasswordValid(password) ? passwordErrorMsg : ''}
                InputProps={{
                  endAdornment: <InputAdornment onClick={() => setShowingPassword(!showingPassword)}>
                    {showingPassword
                      ? <VisibilityOffIcon style={{ cursor: 'pointer' }} />
                      : <VisibilityIcon style={{ cursor: 'pointer' }} />}
                  </InputAdornment>
                }}
                type={showingPassword ? 'text' : 'password'}
                id="password"
                style={{ marginBottom: 4 }}
                fullWidth={true} label="Password"
                variant="outlined" />
              {location.pathname === '/login' ?
                <Typography variant='caption'>Forgot your password?</Typography>
                : null}
              {location.pathname === '/signup' ?
                <FormControlLabel
                  onClick={(e) => { e.preventDefault(); setCheckBoxChecked(!checkBoxChecked) }}
                  control={<Checkbox style={{ color: checkBoxChecked ? '#212121' : '' }} checked={checkBoxChecked} />}
                  label="Accept the terms & conditions" />
                : null}
            </form>
            <Button
              disabled={!isFormValid(email, password)}
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
              style={{ backgroundColor: isFormValid(email, password) ? '#212121' : '', color: isFormValid(email, password) ? 'white' : '', marginTop: 24 }}
              size='large'>
              {location.pathname === '/signup' ? 'Sign Up' : 'Sign In'}
            </Button>
            {location.pathname === '/signup' ?
              <div style={{ width: '100%', textAlign: 'right', paddingTop : 5 }}>
                <Link to='/login' style={{color: 'black', paddingTop: 15 }}>
                  <Typography variant='caption'>Already have an account? Log In</Typography>
                </Link>
              </div>
              :
              <div style={{ width: '100%', textAlign: 'right', paddingTop : 5 }}>
                <Link to='/signup' style={{color: 'black', paddingTop: 15 }}>
                  <Typography variant='caption'>Don't have an account? Sign up</Typography>
                </Link>
              </div>
            }
          </Card>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              paddingLeft: 60,
              backgroundImage: `url(${signState})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              width: '100%',
              height: 400,
              backgroundRepeat: 'no-repeat',
            }} />
        </Grid>
      </Grid>

    </div>
  )
}

export default SignPage