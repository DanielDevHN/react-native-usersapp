// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBwO63ilx1eUxvUsufB1BpHBNaRSceNj8",
  authDomain: "react-native-firebase-fce96.firebaseapp.com",
  projectId: "react-native-firebase-fce96",
  storageBucket: "react-native-firebase-fce96.appspot.com",
  messagingSenderId: "215611304940",
  appId: "1:215611304940:web:3973978a994870179aaec9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default {
    app,
    db
}