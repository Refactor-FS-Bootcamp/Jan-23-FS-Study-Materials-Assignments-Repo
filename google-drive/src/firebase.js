import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDstm6tf4SGWuWkxAZGpguKUVl3TtJw8wA",
    authDomain: "drive-clone-5e170.firebaseapp.com",
    projectId: "drive-clone-5e170",
    storageBucket: "drive-clone-5e170.appspot.com",
    messagingSenderId: "440645775450",
    appId: "1:440645775450:web:c2d4a792336b28b4b76863"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }