import * as firebase from 'firebase';


// The core Firebase JS SDK is always required and must be listed first 
// TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhkT2HriIJ5ClqNgfbhqIoHzJd7z9H5ts",
    authDomain: "react-native-coder-school.firebaseapp.com",
    databaseURL: "https://react-native-coder-school.firebaseio.com",
    projectId: "react-native-coder-school",
    storageBucket: "",
    messagingSenderId: "73461076487",
    appId: "1:73461076487:web:5ee9e0b9a5a0be16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();