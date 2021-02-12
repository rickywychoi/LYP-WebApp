import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaeConfig = {
    apiKey: "AIzaSyBaCfu1kM4SzuLhiRsu6Th6LfKl2lSuDHI",
    authDomain: "loveyourplanet-67892.firebaseapp.com",
    databaseURL: "https://loveyourplanet-67892.firebaseio.com",
    projectId: "loveyourplanet-67892",
    storageBucket: "loveyourplanet-67892.appspot.com",
    messagingSenderId: "56050647459",
    appId: "1:56050647459:web:c9f2e297ca1ceebb83da16",
    measurementId: "G-FMESHB7VSM"
}
firebase.initializeApp(firebaeConfig);

export default firebase;