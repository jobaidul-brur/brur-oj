import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

    // apiKey: "AIzaSyDZVuWrICZEbDPOranIvUSN5iAWNNZm-XA",
    // authDomain: "b12j-35db3.firebaseapp.com",
    // projectId: "b12j-35db3",
    // storageBucket: "b12j-35db3.appspot.com",
    // messagingSenderId: "614885379767",
    // appId: "1:614885379767:web:f23b0c78e37d19e86b0732"

    apiKey: "AIzaSyA7vr2FESssJ4f2LBHE6m8qkJqbFCfzsxI",
    authDomain: "bruroj-e173b.firebaseapp.com",
    projectId: "bruroj-e173b",
    storageBucket: "bruroj-e173b.appspot.com",
    messagingSenderId: "524641682485",
    appId: "1:524641682485:web:d77add9104776f66de9d7c"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
