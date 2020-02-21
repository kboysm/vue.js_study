<template>
  <v-container>
    <v-card
     class="mx-auto"
    max-width="344"
    :class="{'done':list.status ==='done'}"
    outlined
    tile
      v-for="(list,index) in todoList"
      :key="index"
    >
    <p>{{list.memo}}</p>
    <v-btn
    v-if="list.status === 'created'"
    @click="$emit('statusControl',index,'done')"
     fab text small color="#E53935"><i class="fas fa-check"></i></v-btn>
    <v-btn
    v-else
    @click="$emit('statusControl',index,'created')"
     fab text small color="##03A9F4"><i class="fas fa-redo-alt"></i></v-btn>
    <v-btn 
    @click="$emit('listDelete',index)"
    fab text small color="#3F51B5"><i class="fas fa-trash"></i></v-btn>
    <v-btn
    @click='listEdit(list.memo,index)'
    v-if="list.status==='created'" 
    fab text small color="#CCCC00"><i class="fas fa-edit"></i></v-btn>
    </v-card>
  </v-container>
</template>

<script>
import {eventBus} from '../main'
export default {
  props:["todoList"],
  methods: {
    listEdit(memo,index){
      eventBus.listEdit(memo,index);
    }
  },
}
</script>
<style scoped>
.done {
  background-color: rgba(0, 0, 0, 0.1);
}
.done p {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}
</style>