
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyClHHhcnlD-HtRcTIjADyrZiCCcmeCPd-0",
  authDomain: "myreactproject-67303.firebaseapp.com",
  projectId: "myreactproject-67303",
  storageBucket: "myreactproject-67303.firebasestorage.app",
  messagingSenderId: "908559598672",
  appId: "1:908559598672:web:a78e41033bc0aa97ffbd55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const authentication=getAuth(app)

export const db=getFirestore(app)