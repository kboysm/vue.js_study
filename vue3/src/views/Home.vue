<template>
  <div class="home">
    <!-- home
    <p ref="p"> name : {{ name }} And age: {{age}}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">age plus</button>
    <input type="text" v-model="name"> -->
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <h1>Home</h1>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
export default {
  name: 'Home',
  setup() {
    // console.log('setup')

    // const p = ref("")
    // const name = ref('lim')
    // const age = ref(29)

    // const handleClick= () => {
    //   // console.log(p.value)
    //   // p.value.classList.add('test')
    //   name.value = 'limsm'
    //   age.value = 55
    // }
    const search = ref('')
    const names = ref(['aaa','bbb','ccc','ddd','eee','fff','ggg'])
    const stopWatch = watch(search , () => {
      console.log('watch function ran')
    })

    const stopWatchEffect = watchEffect(() => {
      console.log('watchEffect function ran' , search.value)
    })
    const matchingNames = computed(()=> {
      return names.value.filter( name => name.includes( search.value ))
    })
    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
      
    }
    return {
      // name , age , handleClick , p // key:value
      names,
      search,
      matchingNames,
      handleClick
    }
  }
}
</script>
