import axios from 'axios'
import firebaseApp from '../firebase'
import firebase from 'firebase/app'
import { formatDate } from './helperFunctions'


function getRandomImage() {
  return axios.get("https://api.unsplash.com/photos/random?client_id=uxmW_PR6Zn3N6vc5Zsc2pQJVOwzezAXoPBSOi1eXa4A")
    .then(res => res.data.urls.regular)
}

function getEntries() {
  let db = firebase.firestore(firebaseApp);
  return db.collection('entries')
    .get()
    .then(function (querySnapshot) {
      return querySnapshot.docs.map(doc => {
        let obj = doc.data();
        obj.date = formatDate(obj.date);
        obj['id'] = doc.id
        return obj
      })
    })
}

function getEntry(id) {
  let db = firebase.firestore(firebaseApp);
  var docRef = db.collection("entries").doc(id);

  return docRef.get().then(function (doc) {
    let obj = doc.data();
    obj.date = formatDate(obj.date);
    obj['id'] = doc.id
    return obj
  })
}

export {
  getEntry,
  getRandomImage,
  getEntries
}
