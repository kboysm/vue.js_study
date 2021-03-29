<template>
  <div class="home">
    home
    <p ref="p"> name : {{ name }} And age: {{age}}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Home',
  setup() {
    console.log('setup')

    const p = ref("")
    let name = 'lim'
    let age = 29

    const handleClick= () => {
      console.log(p.value)
      p.value.classList.add('test')
    }

    return {
      name , age , handleClick , p // key:value
    }
  }
}
</script>
