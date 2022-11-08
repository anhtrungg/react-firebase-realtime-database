import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAsem870UdpZSF10dPiGwjouLb82ftVEEA",
  authDomain: "voice-project-f2a8b.firebaseapp.com",
  databaseURL: "https://voice-project-f2a8b-default-rtdb.firebaseio.com",
  projectId: "voice-project-f2a8b",
  storageBucket: "voice-project-f2a8b.appspot.com",
  messagingSenderId: "605857742441",
  appId: "1:605857742441:web:b177c0818f004e3b982cf8",
  measurementId: "G-VPTF2DRKS2"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const realtimeDB = firebase.database();

export default firebase;
