import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCr4iYxAH2K6hvo6mNi9c8yHG_aXQDi-s4",
  authDomain: "restaurantapp-a57dc.firebaseapp.com",
  databaseURL: "https://restaurantapp-a57dc-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-a57dc",
  storageBucket: "restaurantapp-a57dc.appspot.com",
  messagingSenderId: "682061271517",
  appId: "1:682061271517:web:4aa30949c3045eae3f6634",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
