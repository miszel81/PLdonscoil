import firebase from "firebase/app";
import "firebase/storage";

require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "donscoil.appspot.com",
  messagingSenderId: "946568036185",
  appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };
