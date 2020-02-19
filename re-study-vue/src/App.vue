<template>
  <div>
    <div  class="parents">
    <h1>부모 컴포넌트</h1>
    <p>부모 컴포넌트 name : {{name}}</p>
    <br>
    <Home :childName="name"></Home>
    <br>
    <About :childName="name"></About>
    </div>
    <button @click="changeName()">이름변경</button>
  </div>
</template>

<script>
import About from '../src/views/About';
import Home from '../src/views/Home';

export default {
  name: 'App',

  components: {
    About,Home
  },

  data: () => ({
    name:'first_re_study'
  }),
  methods: {
    changeName(){
      this.name='LSM'
    },
  },
};
</script>

<style scoped>

.parents {
  text-align: center;
  border: 1px;
  margin: 5;
  background-color: aqua;
}
</style>