////////////////////
// PUTTING FIREBASE DB HERE
////////////////////

<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase.js" />;

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  projectId: "<PROJECT_ID>",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>"
};
firebase.initializeApp(config);
