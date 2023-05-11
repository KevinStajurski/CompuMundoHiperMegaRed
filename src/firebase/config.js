import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa4AQMpy1QKv5xyB3aW2USoFQnv9WZDy8",
  authDomain: "compumundo-33d4e.firebaseapp.com",
  projectId: "compumundo-33d4e",
  storageBucket: "compumundo-33d4e.appspot.com",
  messagingSenderId: "221800527402",
  appId: "1:221800527402:web:55d39cfaf253fb930a3553"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
  return firebase.firestore(app)
}