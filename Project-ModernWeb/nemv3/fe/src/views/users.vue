<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <user str="abc" obj="{a:1}"></user>
      </v-flex>
      <v-flex xs12 sm6>
        <user str="def" :obj="{a:1}"></user>
      </v-flex>
      <v-flex xs12 sm6>
        <user :str="str" :obj="obj"></user>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import user from '@/components/user'

export default {
  components: { user },
  data () {
    return {
        str:"xxx",
      obj: { a: 1 }
    }
  }
}
</script>