import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:null,
    allUsers:[
      {id:1,name:'LSM',email:'QWE@naver.com',password:'1234'},
      {id:2,name:'QWE',email:'ASD@naver.com',password:'1234'},
      {id:3,name:'TGF',email:'ZXC@naver.com',password:'1234'},
  ],
  isLogin:false,
  isLoginError:false,
  },
  mutations: {
    loginSuccess(state,payload){
      state.isLogin=true
      state.isLoginError=false
      state.userInfo=payload
    },
    loginError(state){
      state.isLogin = false
      state.isLoginError=true
    },
    logout(state){
      state.isLogin=false
      state.isLoginError=false
      state.userInfo=null
    }
  },
  actions: {
    login({commit},loginObj){
        // let selectedUser = null
        // state.allUsers.forEach(user=>{
        //         if(user.email === loginObj.email) {selectedUser =user}
        //     })
        //     if(selectedUser === null || selectedUser.password !== loginObj.password)
        //     commit('loginError')
        //     else{
        //       commit('loginSuccess',selectedUser)
        //       router.push({name:'mypage'})
        //   }
        axios
        .post('https://reqres.in/api/login',loginObj)
        .then(res=>{
          //성공 시 토큰이 반환 -> 유저 정보를 가져올 수 있음
          let token = res.data.token
          let config ={
            headers:{
              "access-token":token
            }
          }
          axios.get('https://reqres.in/api/users/2',config)
          .then(response=>{
            console.log(response);
          })
          .catch(error=>{
            console.log(error);
          })
          .catch
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
    },
    logout({commit}){
      commit('logout')
      router.push({name:'home'})
    }
  },
  modules: {
  }
})
