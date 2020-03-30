import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import '../style.css'
import AddEntry from './AddEntry';
import { fetchEntries } from '../reduxStore/actions'
import { connect } from 'react-redux'
import EntryCard from './EntryCard';
import emptyState from '../assets/emptyState.svg'
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";


class EntriesPage extends Component {
  componentDidMount() {
    this.props.fetchEntries();
  }
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ widht: '100%', textAlign: 'center' }}>
            <Typography variant='h2' style={{ color: '#212121', textAlign: 'center', paddingTop: 100, fontWeight: 400 }}>Welcome Islam!</Typography>
            {!this.props.entries.length && !this.props.fetchingEntries ? <img alt='empty' src={emptyState} style={{ height: 700, width: 700 }} /> : null}
          </div>
          {this.props.fetchingEntries ?
            <Grid container justify='center' style={{ paddingTop: 60 }}>
              <Grid item xs={8} style={{ display: 'flex' }}>
                <Grid container>
                  {[0, 1, 2, 3].map((x) => (
                    <Grid key={x} item xs={3} style={{ padding: 15 }}>
                      <Skeleton variant='rect' animation='wave' style={{ height: 400, width: '100%', borderRadius: 15, }} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            :
            <Grid container justify='center' style={{ paddingTop: 60 }}>
              <Grid item xs={8} style={{ display: 'flex' }}>
                <Grid container>
                  {this.props.entries.map((x, i) => (
                    <Grid key={i} item xs={3} style={{ padding: 15 }}>
                      <Link to={`/entries/${x.id}`} style={{ textDecoration: 'none', width: '100%' }} >
                        <EntryCard object={x} />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  entries: state.entries.entriesList,
  fetchingEntries: state.entries.fetchingEntries
})

export default connect(mapStateToProps, { fetchEntries })(EntriesPage)
// function EntriesPage() {

//   const [isDialogOpen, setIsDialogOpen] = React.useState(false);

//   const getDocument = () => {
//     let db = firebase.firestore(firebaseApp);
//     db.collection('entries')
//       .get()
//       .then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//           console.log("Document data:", doc.data());
//         });
//       })

//   }
//   const addDocument = () => {
//     let db = firebase.firestore(firebaseApp);
//     db.collection('entries')
//       .add({
//         title: 'story of my life',
//         body: 'sfdadsssssssssssssssadscvawsdv'
//       })
//       .then(function (docRef) {
//         console.log(docRef)
//       })

//   }

//   const deleteDocument = () => {
//     let db = firebase.firestore(firebaseApp);
//     let docId = getDocument();
//     db.collection('entries')
//       .doc(docId)
//       .delete()
//       .then(function () {
//         console.log('Document successfully deleted!')
//       })
//   }


//   const updateEntries = (element) => {
//     // setEntries((prevState) => {
//     //   prevState.push(element);
//     //   return prevState
//     // })
//   }
// }
