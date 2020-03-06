<template>
  <div>
    <h1>LSM {{title}}</h1>
    <v-btn :color="btnColor" @click="test">test</v-btn>
    <v-chip
    v-for="(item,index) in chips"
    :key="index"
    :color='item.cl'
    >{{item.name}}</v-chip>
  </div>
</template>
<script>
export default {
    data(){
        return{
            title:'good',
            btnColor:'success',
            chips:[{cl:'primary',name:'aaaa'},{cl:'secondary',name:'bbbb'},{cl:'green',name:'cccc'},{cl:'warning',name:'dddd'}]
        }
    },
    methods: {
        test(){
            if(this.title === 'good') this.title ='so so'
            else this.title='good'
        }
    },
}
</script>