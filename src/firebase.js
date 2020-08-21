import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyByBBOj1iTDTVZ1qh9_g6G03BXS9uhf0mk",
    authDomain: "whatsapp-clone-d8cfa.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-d8cfa.firebaseio.com",
    projectId: "whatsapp-clone-d8cfa",
    storageBucket: "whatsapp-clone-d8cfa.appspot.com",
    messagingSenderId: "263192423055",
    appId: "1:263192423055:web:8a75610d7296d8b68b9efa",
    measurementId: "G-HMHW3RYJMC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
