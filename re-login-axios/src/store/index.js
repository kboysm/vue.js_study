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
    login({dispatch},loginObj){ 
        axios //첫번째 axios : 로그인 -> 토큰 반환
        .post('https://reqres.in/api/login',loginObj)
        .then(res=>{
          //성공 시 토큰이 반환 -> 유저 정보를 가져올 수 있음
          let token = res.data.token
          localStorage.setItem('access_token',token)
          dispatch("getMemberInfo")
          
        }).catch(()=>{
          alert('요청하신 정보가 일치하지 않습니다.')
        })
    },
    logout({commit}){
      commit('logout')
      router.push({name:'home'})
    },
    getMemberInfo({commit}){
      let token=localStorage.getItem('access_token')
      let config ={
        headers:{
          "access-token":token
        }
      }
      axios.get('https://reqres.in/api/users/2',config) //두번째 axios : 토큰 -> 멤버 정보를 반환
          //새로 고침 -> 토큰만 가지고 멤버정보를 요청
          .then(response=>{
            let userInfo ={
              id : response.data.data.id,
              first_name:response.data.data.first_name,
              last_name:response.data.data.last_name,
              avatar:response.data.data.avatar
            }
            commit('loginSuccess',userInfo)
            router.push({name:'mypage'})
          })
          .catch(()=>{
            alert('요청하신 정보가 일치하지 않습니다.')
          })
    },
  },
  modules: {
  }
})
