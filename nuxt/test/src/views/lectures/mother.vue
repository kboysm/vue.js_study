<template>
  <v-card>
    <my-son></my-son>
    <my-doughter></my-doughter>
  </v-card>
</template>
<script>
import MySon from "@/components/MySon"
import MyDoughter from "@/components/MyDoughter"
export default {
  components: {
    MySon,
    MyDoughter
  }
}
</script>