
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCOnxzU_b3J-7a1aEjA3nGKRDQL2pvA35c",
    authDomain: "practica-dd15a.firebaseapp.com",
    projectId: "practica-dd15a",
    storageBucket: "practica-dd15a.appspot.com",
    messagingSenderId: "564011048677",
    appId: "1:564011048677:web:41bbf157a8cbb61f667e0c",
    measurementId: "G-0YNXZ2XP3V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
