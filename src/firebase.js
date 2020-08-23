import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA3xEPEtj0puGKclTm71ho3LiE_hIhdrms",
  authDomain: "mentor-me-21484.firebaseapp.com",
  databaseURL: "https://mentor-me-21484.firebaseio.com",
  projectId: "mentor-me-21484",
  storageBucket: "mentor-me-21484.appspot.com",
  messagingSenderId: "8853289378",
  appId: "1:8853289378:web:78ef91ff5aebd29886dafb",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
