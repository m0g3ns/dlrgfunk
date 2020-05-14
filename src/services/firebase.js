import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCYsI4H3EdRmbjgL5pos2pdHVUmP2S2Hkk",
    authDomain: "dlrgfunk.firebaseapp.com",
    databaseURL: "https://dlrgfunk.firebaseio.com",
    projectId: "dlrgfunk",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
export const firestore = firebase.firestore();
