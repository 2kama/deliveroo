import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "xxxxxxxxx",
  authDomain: "xxxxxxx",
  projectId: "xxxxxxxx",
  storageBucket: "xxxxxxxx",
  messagingSenderId: "xxxxxxxxx",
  appId: "xxxxxxxxx",
  measurementId: "xxxxxxxx"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore()

export { db }