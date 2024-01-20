/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurement__id is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6Wll-QGX7kLlaJO_i7D9bON-Pm8dTzzw",
    authDomain: "best-food-restaurant-client.firebaseapp.com",
    project__id: "best-food-restaurant-client",
    storageBucket: "best-food-restaurant-client.appspot.com",
    messagingSender__id: "483989405392",
    app__id: "1:483989405392:web:bc7ca2deff34b001cfa8d5",
    measurement__id: "G-5YZBNSXZSM"
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
// For Firebase JS SDK v7.20.0 and later, measurement__id is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Wll-QGX7kLlaJO_i7D9bON-Pm8dTzzw",
  authDomain: "best-food-restaurant-client.firebaseapp.com",
  project__id: "best-food-restaurant-client",
  storageBucket: "best-food-restaurant-client.appspot.com",
  messagingSender__id: "483989405392",
  app__id: "1:483989405392:web:bc7ca2deff34b001cfa8d5",
  measurement__id: "G-5YZBNSXZSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;