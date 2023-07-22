
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCG5bAqPfOcy8HIAoHfto5JfZsZCvYXTR0",
    authDomain: "react-chat-844bf.firebaseapp.com",
    projectId: "react-chat-844bf",
    storageBucket: "react-chat-844bf.appspot.com",
    messagingSenderId: "349757035457",
    appId: "1:349757035457:web:d5bc927227999005049540",
    measurementId: "G-XXP9L15SHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider };