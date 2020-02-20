<template>
<v-container>
  {{todoList}}
  <v-layout row wrap>
    <v-row >
      <v-col xs6>
        <List />
      </v-col>
    </v-row>
    <v-row >
      <v-col xs6>
        <ListAdd 
        @listAdd="listAdd"
        />
      </v-col>
    </v-row>
  </v-layout>
</v-container>
</template>

<script>
import List from './views/List'; 
import ListAdd from './views/ListAdd'; 
export default {
  components:{
    List,
    ListAdd
  },
  data: () => ({
    todoList:[],
  }),
  methods:{
    listAdd(memo){
      console.log('잘 받음',memo);
      this.todoList.push({memo:memo,status:"created"});
    }
  }
};
</script>
