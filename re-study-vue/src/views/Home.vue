<template>
  <div>
    <h2>자식 컴포넌트 Home.vue</h2>
        <h2>{{childName}}</h2>
        <p>{{obj_D}}</p>
        test해본 결과 props로 객체를 넘기는 것도 가능하다 <br>
       이름: <input type="text" v-model="user.name">
       <button @click="changeD()">수정</button>
       <p> eventBus : {{eventUser}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import {eventBus} from '../main'

export default {
    props:['childName','obj_D'],
  name: 'Home',
  data(){
    return {
      user:{},
      eventUser:{}
    }
  },
  methods: {
    changeD(){
      console.log(this.user);
      this.$emit("child",this.user);
      /*
        this.$emit("child",this.user);
        는 풀어서 쓰면
        child(this.user)를 의미함
      */
    }
  },
  created() {
    this.user.name=this.obj_D.name;
    this.user.age=this.obj_D.age;
    this.user.address=this.obj_D.address;
  },
  mounted() {
    eventBus.$on("EventBus", data =>{
      this.eventUser = data;
    });
  },
}
</script>
<style scoped>
input {
  background-color: bisque;
}
button {
  color:blueviolet;
}
</style>