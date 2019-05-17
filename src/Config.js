import Firebase from 'firebase';  

let config = {  
    apiKey: "AIzaSyAkEVIvnGmDuX4_qs65mAIoYhZr9TP3aY4",
    authDomain: "fbdemo-1863b.firebaseapp.com",
    databaseURL: "https://fbdemo-1863b.firebaseio.com",
    projectId: "fbdemo-1863b",
    storageBucket: "fbdemo-1863b.appspot.com",
    messagingSenderId: "169160486519",
    appId: "1:169160486519:web:38268a7ee1edd786"
 };

let app = Firebase.initializeApp(config);  
export const db = app.database();  
