import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAeaOecwArmmnkwg2u6mEQ-TyC48nSFESI",
  authDomain: "thunderhammer-175102.firebaseapp.com",
  databaseURL: "https://thunderhammer-175102.firebaseio.com",
  projectId: "thunderhammer-175102",
  storageBucket: "thunderhammer-175102.appspot.com",
  messagingSenderId: "781060256514"
};

export const firebaseApp = firebase.initializeApp(config);
export const workoutRef = firebase.database().ref("workouts");
