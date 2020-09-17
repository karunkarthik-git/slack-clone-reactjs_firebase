import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvhOiWrBD5NfuFOf5LzxBo1zOyj4T_toI",
  authDomain: "slack-reactjs-50893.firebaseapp.com",
  databaseURL: "https://slack-reactjs-50893.firebaseio.com",
  projectId: "slack-reactjs-50893",
  storageBucket: "slack-reactjs-50893.appspot.com",
  messagingSenderId: "649801870826",
  appId: "1:649801870826:web:388770734ad4e597d85693",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
