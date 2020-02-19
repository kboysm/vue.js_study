<template>
  <div>
    <h2>자식 컴포넌트 Home.vue</h2>
        <h2>{{childName}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    props:['childName'],
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
