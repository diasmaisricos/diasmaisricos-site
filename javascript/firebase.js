var firebaseConfig = {
    apiKey: "AIzaSyCBqKEPYrLtXkO1lp3ZifzS7aO5n8bonbk",
    authDomain: "dias-mais-ricos.firebaseapp.com",
    projectId: "dias-mais-ricos",
    storageBucket: "dias-mais-ricos.appspot.com",
    messagingSenderId: "504916465376",
    appId: "1:504916465376:web:b9a93a917aec6f2d352285",
    measurementId: "G-PM9718SJCS"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
db = firebase.firestore();