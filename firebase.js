import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvKt1h4DXCXEY0AbBMYDRSHaHo6IugYkI",
  authDomain: "signal-app-clone-d0956.firebaseapp.com",
  projectId: "signal-app-clone-d0956",
  storageBucket: "signal-app-clone-d0956.appspot.com",
  messagingSenderId: "518475116746",
  appId: "1:518475116746:web:4ce54637c4c79ee87d0433"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
