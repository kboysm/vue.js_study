import * as firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import Vue from 'vue'

export default function({store}){

  if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBASE_URL,
        projectId: String(process.env.FIREBASE_PID)
      });
    
      Vue.prototype.$db = firebase.firestore();
      Vue.prototype.$auth = firebase.auth();
    
      //event hook
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log('user ok')
        } else {
            // No user is signed in.
            console.log('user null')
        }
        console.log(user)
        store.commit('setUser',user)
        });
    }
}

