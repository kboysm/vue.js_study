<template>
<v-container>
  <v-layout row wrap>
    <v-row >
      <v-col xs6 pa-2>
        <List 
        :todoList="todoList"
        />
      </v-col>
    </v-row>
    <v-row >
      <v-col xs6 pa-2>
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
