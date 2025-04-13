import { auth, db } from './firebase.js';
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.data();

    document.getElementById('profileUsername').innerText = userData.username;
    document.getElementById('profileBio').innerText = userData.bio;

    // Show this user's posts
    const q = query(collection(db, "posts"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    const container = document.getElementById('myPostsContainer');
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const el = document.createElement('div');
      el.innerHTML = `<h4>${post.title}</h4><p>${post.content}</p><hr>`;
      container.appendChild(el);
    });

  } else {
    alert("Please log in to view your profile.");
    window.location.href = "index.html";
  }
});
