<template>
  <div class="about">
    <h1>자식 컴포넌트2 About.vue</h1>
    <h2>{{childName}}</h2>
            <p>{{obj_D}}</p>
    <p>이름 : {{user.name}}</p>
    <p>나이 : {{user.age}}</p>
    <p>주소 : {{user.address}}</p>
    <button @click="changeObj">이벤트버스</button>
  </div>
</template>
<script>
import {eventBus} from '../main';

export default {
  props:{childName:String,
  obj_D:Object
},data(){
  return{
    user:{
      name:'joy',
      age:26,
      address:'joyWorld@kakao.com'}
  }
}
//props ['부모에게 받은객체'] 로 하거나 
//props:{부모로부터 받은 데이터:데이터타입을 적음}
,
methods: {
  changeObj(){
    eventBus.$emit('EventBus',this.user);
  }
},
}
</script>

<style scoped>
button {
  color: beige;
}
</style>