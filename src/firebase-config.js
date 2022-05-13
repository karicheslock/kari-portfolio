import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjTxONZeXyfueLC9-aAzbt51EmUoP3sDU",
  authDomain: "comment-section-live-blog.firebaseapp.com",
  projectId: "comment-section-live-blog",
  storageBucket: "comment-section-live-blog.appspot.com",
  messagingSenderId: "316243451739",
  appId: "1:316243451739:web:02e7ab80608dba28eb047e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED,
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();