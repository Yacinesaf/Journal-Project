import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import snackbar from '../reduxStore/reducers/snackbar';
import { showSnackbar, hideSnackbar } from '../reduxStore/actions'
import { connect } from 'react-redux'

class SnackbarComp extends Component {
  render() {
    return (
      <div>
        <Snackbar
          onClose={() => { this.props.hideSnackbar() }}
          open={this.props.showSnackBar}
          autoHideDuration={3000}>
          <Alert elevation={6} variant="filled" severity={isFormValid(email, password) ? "success" : "error"}>
            {isFormValid(email, password) ? 'You are Signed In !' : 'Incorrect inputs'}
          </Alert>
        </Snackbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showSnackbar : snackbar.show,
  message : snackbar.message
})


export default connect(mapStateToProps, { showSnackbar, hideSnackbar })(SnackbarComp)