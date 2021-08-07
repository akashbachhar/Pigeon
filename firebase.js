import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv_wn5ldNcyEicwQpdcbvFrPriDHAhS_E",
  authDomain: "pigeon-instant-messenger.firebaseapp.com",
  projectId: "pigeon-instant-messenger",
  storageBucket: "pigeon-instant-messenger.appspot.com",
  messagingSenderId: "236051809716",
  appId: "1:236051809716:web:9a9bc80040fa1907f89ee1",
  measurementId: "G-WZ990BWS9C"
};

let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig); 
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};