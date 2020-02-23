import Vue from 'vue'
import Vuex from 'vuex'
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
    login({state,commit},loginObj){
        let selectedUser = null
        state.allUsers.forEach(user=>{
                if(user.email === loginObj.email) {selectedUser =user}
            })
            if(selectedUser === null || selectedUser.password !== loginObj.password)
            commit('loginError')
            else{
              commit('loginSuccess',selectedUser)
              router.push({name:'mypage'})
          }
    },
    logout({commit}){
      commit('logout')
      router.push({name:'home'})
    }
  },
  modules: {
  }
})
