import axios from 'axios'
import Vue from 'vue'

const firebaseAPI = axios.create({
    baseURL: "http://localhost:5001/test-vf-lsm-ae9ca/us-central1/",
    timeout: 5000,
    headers: { "Custom-Header": "LSM" },
})

firebaseAPI.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.authorization = Math.random()
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


Vue.prototype.$axios = firebaseAPI