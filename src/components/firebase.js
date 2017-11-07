import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAui6CWd5xJscQRoH7bqI9-rho_-l_D2hY",
    authDomain: "twitter-cleaner-3e810.firebaseapp.com",
    databaseURL: "https://twitter-cleaner-3e810.firebaseio.com",
    projectId: "twitter-cleaner-3e810",
    storageBucket: "twitter-cleaner-3e810.appspot.com",
    messagingSenderId: "869022372749"
  };
  firebase.initializeApp(config);
  export const provider = new firebase.auth.TwitterAuthProvider();
  export const auth = firebase.auth();
  export default firebase;
  
 