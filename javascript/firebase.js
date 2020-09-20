var firebaseConfig = {
    apiKey: "AIzaSyBxw_EW3_1Gopnz1rx1s96bSjF6ikc9ylc",
    authDomain: "dias-mais-rico.firebaseapp.com",
    databaseURL: "https://dias-mais-rico.firebaseio.com",
    projectId: "dias-mais-rico",
    storageBucket: "dias-mais-rico.appspot.com",
    messagingSenderId: "864255288206",
    appId: "1:864255288206:web:bffd759def064f135bbadf",
    measurementId: "G-MYC4MDWZQV"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
db = firebase.firestore();