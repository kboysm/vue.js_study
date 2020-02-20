<template>
  <v-container>
    <v-card
    class="d-flex pa-2"
    outlined
    tile
      v-for="(list,index) in todoList"
      :key="index"
    >
    <p>{{list.memo}}</p>
    <v-btn fab text small color="#E53935"><i class="fas fa-check"></i></v-btn>
    <v-btn fab text small color="##03A9F4"><i class="fas fa-redo-alt"></i></v-btn>
    <v-btn fab text small color="#3F51B5"><i class="fas fa-trash"></i></v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props:["todoList"]
}
</script>