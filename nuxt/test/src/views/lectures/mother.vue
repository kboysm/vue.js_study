<template>
  <v-card>
    <my-son name="aaaa" @help="listen"></my-son>
    <my-son name="abba"></my-son>
    <my-son name="acca"></my-son>
    <my-son name="adda"></my-son>
    <my-doughter></my-doughter>
    <v-card-text>
      <v-alert type="primary" v-model="call">LSM good</v-alert>
    </v-card-text>
  </v-card>
</template>
<script>
import MySon from "@/components/MySon"
import MyDoughter from "@/components/MyDoughter"
export default {
  components: {
    MySon,
    MyDoughter
  },
  data() {
    return {
      call: false
    }
  },
  methods: {
    listen() {
      this.call = true
    }
  }
}
</script>