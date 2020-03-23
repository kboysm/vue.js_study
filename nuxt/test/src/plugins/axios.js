import axios from 'axios'
import Vue from 'vue'

const firebaseAPI = axios.create({
    baseURL: "http://localhost:5001/test-vf-lsm-ae9ca/us-central1/",
    timeout: 5000,
    headers: { "Custom-Header": "LSM" },
})

Vue.prototype.$axios = firebaseAPI