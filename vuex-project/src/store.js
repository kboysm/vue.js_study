import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  mutations: {
    //뮤테이션은 state값을 변화시키는 용도, 각각의 컴포넌트에서 state를 똑같이 변화시키면 코드의 중복이 발생 -> mutation등장!
    addUsers:(state,payload)=>{
      state.allUsers.push(payload);
    },
  },
  actions: {

  },
  getters:{
    allUsersCount(state){
      return state.allUsers.length;
    },
    countOfSeoul: state =>{
      let count =0;
      state.allUsers.map(user =>{
        if(user.address==='Seoul') count++
      })
      return count
    },
    percentOfSeoul: (state,getters) =>{
      return Math.round(getters.countOfSeoul/getters.allUsersCount *100)
    }
  }
})
