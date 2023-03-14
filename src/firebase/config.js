// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_8fV4nrpckRYg7Egab-bI7CK6-CLbVSI",
    authDomain: "sandra-fernandes-7c405.firebaseapp.com",
    projectId: "sandra-fernandes-7c405",
    storageBucket: "sandra-fernandes-7c405.appspot.com",
    messagingSenderId: "584483529705",
    appId: "1:584483529705:web:1aef95b3e04d9d64be6178"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();


export { projectFirestore, projectStorage };