// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2hVTG9nmOq_cLYrLNpuVkyd8mCKf-_8c",
  authDomain: "netflix-52f84.firebaseapp.com",
  projectId: "netflix-52f84",
  storageBucket: "netflix-52f84.firebasestorage.app",
  messagingSenderId: "818108885157",
  appId: "1:818108885157:web:ebc39a97037b98341d854c",
  measurementId: "G-DEM19N5PMG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);