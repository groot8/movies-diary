import * as firebase from "firebase/app";
import 'firebase/auth';
import database from "firebase/database";

const config ={
apiKey: "AIzaSyCa2xOBPrxZNBWUTvzLH8Qu-RGpK_g2XRs",
authDomain: "test-blog-45973.firebaseapp.com",
databaseURL: "https://test-blog-45973.firebaseio.com",
projectId: "test-blog-45973",
storageBucket: "test-blog-45973.appspot.com",
messagingSenderId: "790516186612",
appId: "1:790516186612:web:bf37efe0cd552ba5068da1"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};