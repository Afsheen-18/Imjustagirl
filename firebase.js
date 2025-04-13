// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-aNINueL551opy_2NqDpR5O47dORoMkU",
  authDomain: "imjustagirl.firebaseapp.com",
  projectId: "imjustagirl-82044",
  storageBucket: "imjustagirl-82044.appspot.com",
  messagingSenderId: "220745786840",
  appId: "1:220745786840:web:4a7fb90ddf149b061bbfbe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
