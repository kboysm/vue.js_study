<template>
  <div class="home">
    <!-- home
    <p ref="p"> name : {{ name }} And age: {{age}}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">age plus</button>
    <input type="text" v-model="name"> -->
    <!-- <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <h1>Home</h1>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button> -->
    <h1>home</h1>
    <div v-if="error">{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
      <button @click="showPosts = !showPosts">toggle posts</button>
      <button @click="posts.pop()">delete a post</button>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/postList.vue'
import { ref, reactive, computed, watch, watchEffect } from 'vue'
export default {
  name: 'Home',
  components:{
    PostList
  },
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
    // const search = ref('')
    // const names = ref(['aaa','bbb','ccc','ddd','eee','fff','ggg'])
    // const stopWatch = watch(search , () => {
    //   console.log('watch function ran')
    // })

    // const stopWatchEffect = watchEffect(() => {
    //   console.log('watchEffect function ran' , search.value)
    // })
    // const matchingNames = computed(()=> {
    //   return names.value.filter( name => name.includes( search.value ))
    // })
    // const handleClick = () => {
    //   stopWatch()
    //   stopWatchEffect()
      
    // }
    const showPosts = ref(true)
    const { posts , error , load } = getPosts()
    load()
    return {
      // name , age , handleClick , p // key:value
      // names,
      // search,
      // matchingNames,
      // handleClick
      posts , showPosts ,error
    }
  }
}
</script>
