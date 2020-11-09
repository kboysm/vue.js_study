<template>
  <div class="container">
<!--  <header>-->
<!--    <slot name="header"></slot>-->
<!--  </header>-->
<!--  <main>-->
<!--    <slot></slot>-->
<!--  </main>-->
<!--  <footer>-->
<!--    <slot name="footer"></slot>-->
<!--  </footer>-->

<!--    <slot text="hello from child"></slot>-->
    <slot :testSlotData="testSlotData"></slot>
<!--    slot에 v-bind된 데이터를 상위 컴포넌트의 template slot-scope="props"
        로 보내서 상위 컴포넌트에서 사용할 시 {{props.testSlotData}}로 꺼내서 사용할 수 있다.
-->
</div>
</template>
<script>
export default {
  name:'slot-test',
  data(){
    return{
      testSlotData:'slot test data'
    }
  }
}
</script>