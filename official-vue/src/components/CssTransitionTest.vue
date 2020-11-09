<template>
  <div id="demo">

    <div>
      클래스가 자동으로 생성되는 것이 아니라 name-해당 css를 작성을 해놓으면 transition에 적용해 주겠다는 약속
    </div>

    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>

    <br>
    --------------------------------
    <br>
    <button @click="show2 = !show2">
      Toggle render
    </button>
    <transition name="slide-fade">
      <p v-if="show2">hello</p>
    </transition>
  </div>
</template>
<script>
export default {
  name:'css-transition-test',
  data() {
    return{
    show: true,
      show2:true
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>