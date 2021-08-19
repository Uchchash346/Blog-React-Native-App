import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBM2WigSKFdNmPnfstCyIfhNSLNxbpCK28",
    authDomain: "blog-native-app.firebaseapp.com",
    projectId: "blog-native-app",
    storageBucket: "blog-native-app.appspot.com",
    messagingSenderId: "929640833303",
    appId: "1:929640833303:web:28744f61c9017e425a9752"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db
};