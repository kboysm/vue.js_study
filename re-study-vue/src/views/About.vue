<template>
  <div class="about">
    <h1>자식 컴포넌트2 About.vue</h1>
    <h2>{{childName}}</h2>
  </div>
</template>
<script>
export default {
  props:['childName']
}
</script>