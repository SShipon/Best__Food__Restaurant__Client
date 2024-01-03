/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6Wll-QGX7kLlaJO_i7D9bON-Pm8dTzzw",
    authDomain: "best-food-restaurant-client.firebaseapp.com",
    projectId: "best-food-restaurant-client",
    storageBucket: "best-food-restaurant-client.appspot.com",
    messagingSenderId: "483989405392",
    appId: "1:483989405392:web:bc7ca2deff34b001cfa8d5",
    measurementId: "G-5YZBNSXZSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9HD38i8qH1EFHblU9AeoAbIEzdsgPhro",
  authDomain: "food-4cdb2.firebaseapp.com",
  projectId: "food-4cdb2",
  storageBucket: "food-4cdb2.appspot.com",
  messagingSenderId: "914952086993",
  appId: "1:914952086993:web:c890ca0ceb874f9d4eecf0",
  measurementId: "G-5V7GKFXX6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;