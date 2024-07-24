import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAies5ezUF2kNp8RRdWgOvJnN1PQjQFn2Q",
  authDomain: "analytics-nextjs.firebaseapp.com",
  projectId: "analytics-nextjs",
  storageBucket: "analytics-nextjs.appspot.com",
  messagingSenderId: "209257524805",
  appId: "1:209257524805:web:eec28f2f07e2196551fd2c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app);

export { authFirebase };