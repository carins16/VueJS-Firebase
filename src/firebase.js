import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBJ8AqeMjGzjS0u9B0S9FnlHb2PBn7NFag",
  authDomain: "vuejs-project-f940c.firebaseapp.com",
  databaseURL: "https://vuejs-project-f940c.firebaseio.com",
  projectId: "vuejs-project-f940c",
  storageBucket: "vuejs-project-f940c.appspot.com",
  messagingSenderId: "280267931995",
  appId: "1:280267931995:web:127bb8b5e2b43d81"
});

export default firebase;
export const firestore = firebase.firestore();