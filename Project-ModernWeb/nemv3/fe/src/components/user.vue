<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{str}}</h3>
    </v-card-title>
    
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{obj.a}}</h3>
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  props: [ 'str', 'obj' ]
}
</script>