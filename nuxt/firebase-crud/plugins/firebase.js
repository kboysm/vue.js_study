import * as firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import Vue from 'vue'
if(!firebase.apps.length){
firebase.initializeApp({
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_URL,
    projectId: String(process.env.FIREBASE_PID)
  });

  Vue.prototype.$db = firebase.firestore();
  Vue.prototype.$auth = firebase.auth();
}