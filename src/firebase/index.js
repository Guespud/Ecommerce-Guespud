import firebase from 'firebase/app';
import '@firebase/firestore';


const app = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: "ecommerce-gshop.firebaseapp.com",
    projectId: "ecommerce-gshop",
    storageBucket: "ecommerce-gshop.appspot.com",
    messagingSenderId: "922751280984",
    appId: "1:922751280984:web:38dab678c874f0bb02e72d",
    measurementId: "G-KLGXVX68M0"
  });

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}