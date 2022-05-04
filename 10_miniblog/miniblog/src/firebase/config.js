import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVIvsUMfTSNKIZE59uS9LAtAL0G0wp54I",
    authDomain: "miniblog-798c3.firebaseapp.com",
    projectId: "miniblog-798c3",
    storageBucket: "miniblog-798c3.appspot.com",
    messagingSenderId: "370690962806",
    appId: "1:370690962806:web:1de1e420551001accdf657"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };