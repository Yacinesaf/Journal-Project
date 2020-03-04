import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyCP7PoU7dMW4o5_8frl3jCtgWHCHwl7Hfc",
  authDomain: "sliceoflife-5bdf4.firebaseapp.com",
  databaseURL: "https://sliceoflife-5bdf4.firebaseio.com",
  projectId: "sliceoflife-5bdf4",
  storageBucket: "sliceoflife-5bdf4.appspot.com",
  messagingSenderId: "758213683021",
  appId: "1:758213683021:web:d9823567977db7fafe3904"
};

export default firebase.initializeApp(firebaseConfig);