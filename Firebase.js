
  // Initialize Firebase
  import firebase from 'firebase';
  import app from 'firebase/app';
  import 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyCzqX9SWPMLqy1_s49XfBD3h3XUMEUByPM",
    authDomain: "fpe-react-ts-firebase.firebaseapp.com",
    databaseURL: "https://fpe-react-ts-firebase.firebaseio.com",
    projectId: "fpe-react-ts-firebase",
    storageBucket: "",
    messagingSenderId: "850471451621",
    appId: "1:850471451621:web:48a5cc17ca80d389"
  };

class Firebase {
  constructor() {
    
    if (!firebase.apps.length) {
    app.initializeApp(firebaseConfig);
}
  }


  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

     doSignOut = () => this.auth.signOut();

       doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;