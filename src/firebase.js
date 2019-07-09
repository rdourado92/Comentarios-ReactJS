import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBz1mhyoe2DKagw1fEKHzIZT7k1n8B8ReA",
  authDomain: "comments-devreactjs-robson.firebaseapp.com",
  databaseURL: "https://comments-devreactjs-robson.firebaseio.com",
  projectId: "comments-devreactjs-robson",
  storageBucket: "",
  messagingSenderId: "394854581328",
  appId: "1:394854581328:web:31299bba6f77b195"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();
