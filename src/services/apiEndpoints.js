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
  return db.collection('entries').orderBy('date', 'desc').limit(8)
    .get()
    .then(function (querySnapshot) {
      let entries = querySnapshot.docs.map(doc => {
        let obj = doc.data();
        obj.date = formatDate(obj.date);
        obj['id'] = doc.id
        return obj
      })
      return {
        entries,
        docs: {
          start: querySnapshot.docs[0],
          end: querySnapshot.docs[querySnapshot.docs.length - 1]
        }
      }
    })
}

function switchEntries(docs, direction) {
  let db = firebase.firestore(firebaseApp);
  var lastVisible = direction !== 'next' ? docs.start : docs.end;
  if (direction === 'next') {
    return db.collection("entries")
      .orderBy("date", 'desc')
      .startAfter(lastVisible)
      .limit(8)
      .get()
      .then(function (querySnapshot) {
        let entries = querySnapshot.docs.map(doc => {
          let obj = doc.data();
          obj.date = formatDate(obj.date);
          obj['id'] = doc.id
          return obj
        })
        return {
          entries,
          docs: {
            start: querySnapshot.docs[0],
            end: querySnapshot.docs[querySnapshot.docs.length - 1]
          }
        }
      })

  } else {
    console.log(lastVisible)
    return db.collection('entries')
      .orderBy("date", 'asc')
      .startAfter(lastVisible)
      .limit(8)
      .get()
      .then(function (querySnapshot) {
        let entries = querySnapshot.docs.map(doc => {
          let obj = doc.data();
          obj.date = formatDate(obj.date);
          obj['id'] = doc.id
          return obj
        })
        return {
          entries: entries.reverse(),
          docs: {
            end: querySnapshot.docs[0],
            start: querySnapshot.docs[querySnapshot.docs.length - 1]
          }
        }
      })
  }
}

function getEntriesCount() {
  let db = firebase.firestore(firebaseApp);
  return db.collection('entries')
    .get()
    .then(function (querySnapshot) {
      return querySnapshot.docs.length
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

function createEntry(obj) {
  let db = firebase.firestore(firebaseApp);
  return getRandomImage().then(res => {
    obj['img'] = res;
    let backendFormat = { ...obj, date: firebase.firestore.Timestamp.fromDate(new Date()) }
    return db.collection("entries").add(backendFormat).then(function (doc) {
      console.log(obj);
      return { ...obj, id: doc.id }
    })
  })
}

function user(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
    console.log(res);
  })
}

export {
  getEntry,
  getRandomImage,
  getEntries,
  createEntry,
  getEntriesCount,
  switchEntries,
  user
}
