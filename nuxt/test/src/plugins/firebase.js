import Vue from "vue";
import * as firebase from 'firebase/app';
import firebaseConfig from '../../firebaseConfig'
// import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase = firebase