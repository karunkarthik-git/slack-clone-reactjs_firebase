import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsnj1xPxCgGOW_UiIn2fvXwjhXSCZ8i-A",
  authDomain: "slack-reactjs-c6f71.firebaseapp.com",
  databaseURL: "https://slack-reactjs-c6f71.firebaseio.com",
  projectId: "slack-reactjs-c6f71",
  storageBucket: "slack-reactjs-c6f71.appspot.com",
  messagingSenderId: "117506324451",
  appId: "1:117506324451:web:617fb14eb32d8af11652d6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
