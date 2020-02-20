<template>
  <div>
    <div  class="parents">
    <h1>부모 컴포넌트</h1>
    <p>mixins test -> {{getDateAndTime(new Date())}}</p>
    <p>{{compumix}}</p>
    <p>부모 컴포넌트 name : {{name}}</p>
    <p> 부모 obj_D 객체 : {{obj_D}}</p>
    <br>
    <div class="ch1">
    <Home 
    :childName="name" 
    :obj_D="obj_D[0]"
    @child="parents"
    ></Home>
    <br>
    </div>
    <div class="ch2">
    <About :childName="name" :obj_D="obj_D[1]"></About>
    </div>
    <button @click="changeName()">이름변경</button>
  </div>
  <br><br>
  mixin 설명: 각 컴포넌트에서 똑같은 기능을 모아두었다가 수정할 일이 있을때 한번에 수정할 수 있도록 하는것
  </div>
</template>

<script>
import About from '../src/views/About';
import Home from '../src/views/Home';
import {firstM} from './mixins/first_mixin';
export default {
  name: 'App',

  components: {
    About,Home
  },

  data: () => ({
    name:'first_re_study',
    obj_D:[{name:'hana' , age:25 , address:'hanahihi@google.com'},
           {name:'chacha' , age:28 , address:'chcha@google.com'}]
  }),
  methods: {
    changeName(){
      this.name='LSM'
    },
    parents(user){
      this.obj_D[0].name = user.name;
      //자식 컴포넌트에서 넘긴 user객체를 부모컴포넌트에 적용
    }
  },
  computed: {
    compumix(){
      return this.mixinDate+' 많이 써먹어야지~';
    }
  },
  created() {
    console.log('유저 컴포넌트');
  },
  mixins:[firstM] //믹스인 안에있는 함수나 데이터 등등은 모두 this를 통해서 불러올 수 있다.
  //만약 이름이 겹치는 동일한 데이터가 있다면 믹스인보다 현재 컴포넌트의 데이터가 출력, 믹스인이 먼저 실행되므로 덮어 씌워진다.
};
</script>

<style scoped>
.ch1 {
  width:50%;
  height: 50%;
  display: inline-block;
  text-align: center;
  background-color: chartreuse;
}
.ch2 {
  width:50%;
  height: 50%;
  display: inline-block;
  text-align: center;
  background-color:coral;
}
.parents {
  width:100%;
  height: 100%;
  text-align: center;
  border: 1px;
  margin: 5;
  background-color: aqua;
}
</style>