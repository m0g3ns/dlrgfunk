import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
    apiKey: "AIzaSyCYsI4H3EdRmbjgL5pos2pdHVUmP2S2Hkk",
    authDomain: "dlrgfunk.firebaseapp.com",
    databaseURL: "https://dlrgfunk.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
