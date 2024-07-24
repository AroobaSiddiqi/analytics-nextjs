import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace the following with your own Firebase project's configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app);

export { authFirebase };