import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your Firebase config from the console
const firebaseConfig = {
  apiKey: "AIzaSyD-aNINueL551opy_2NqDpR5O47dORoMkU",
  authDomain: "imjustagirl.firebaseapp.com",
  projectId: "imjustagirl-82044",
  storageBucket: "imjustagirl-82044.appspot.com",
  messagingSenderId: "220745786840",
  appId: "1:220745786840:web:4a7fb90ddf149b061bbfbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Function
const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Signed up:', user.email);
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
};

// Login Function
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Logged in:', user.email);
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
};

// Logout Function
const logout = () => {
  signOut(auth).then(() => {
    console.log('Logged out!');
  }).catch((error) => {
    console.error('Error logging out:', error.message);
  });
};

// Export for use in your other scripts
export { signup, login, logout };
import { signup, login, logout } from './firebase.js';

// Signup handler
const signupHandler = () => {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  signup(email, password);
};

// Login handler
const loginHandler = () => {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  login(email, password);
};

// Logout handler
const logoutHandler = () => {
  logout();
};
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Check if the user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user.email);
    document.getElementById('logoutButton').style.display = 'block';
    // Optionally, show their name/email somewhere on the page
  } else {
    console.log('No user is logged in');
    document.getElementById('logoutButton').style.display = 'none';
  }
});
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
