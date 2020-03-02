<template>
  <v-card>
    <v-card-title>
      vue-dialog 사용하는 중 에러 발생 1시간 30분 소요 해결 : 강의는 1년전 내용이라 많이 달랐고, 현재는 너무 많이 발전해서
      nuxt-config.js에서 module에  'vuetify-dialog/nuxt' 만 추가해주면 vuetify-dialog를 사용할 수 있다. 
    </v-card-title>
    <v-card-text>
      <v-textarea v-model="txt" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="test">
        test
      </v-btn>
      <v-btn @click="hello">
        hello
      </v-btn>
      <v-btn @click="moment">
        moment
      </v-btn>
      <v-btn @click="dialog">
        dialog
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      txt: ''
    }
  },
  methods: {
    async test() {
      const r = await this.$axios.get('/api')
      this.txt = r.data
    },
    async hello() {
      const r = await this.$axios.get('/api/hello')
      this.txt = r.data
    },
    moment() {
      this.txt = this.$moment().toLocaleString()
    },
    async dialog(){
        const res = await this.$dialog.confirm({
        text: 'Do you really want to exit?',
        title: 'Warning'
    })
    this.text = res
    },
  }
}
</script>