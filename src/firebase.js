import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCcqM--UJcgjrzkGKnwvZfCmKA83RaRVXM",
  authDomain: "ambar-weather.firebaseapp.com",
  databaseURL: "https://ambar-weather-default-rtdb.firebaseio.com",
  projectId: "ambar-weather",
  storageBucket: "ambar-weather.appspot.com",
  messagingSenderId: "52522026629",
  appId: "1:52522026629:web:02d9ec11471e3ffbb84bec",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase.database();
