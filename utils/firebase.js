import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "chattin-d636e.firebaseapp.com",
  projectId: "chattin-d636e",
  storageBucket: "chattin-d636e.appspot.com",
  messagingSenderId: "998225057858",
  appId: "1:998225057858:web:ba97457f750ac6912175db",
  measurementId: "G-161PSR9ZQP"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore()

export { db }