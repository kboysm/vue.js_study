<template>
<v-container>
  <v-layout row wrap>
    <v-row >
      <v-col xs6 pa-2>
        <h1>to do list</h1>
    <p>전체 할일 : {{todoList.length}} / 완료된 할일 :{{countDone}} / 남은 할일 : {{todoList.length - countDone}}</p>
        <List 
        :todoList="todoList"
        @statusControl="statusControl"
        @listDelete="listDelete"
        />
      </v-col>
    </v-row>
    <v-row >
      <v-col xs6 pa-2>
        <ListAdd 
        @listAdd="listAdd"
        @listEdit="listEdit"
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
    },
    statusControl(index,status){
      this.todoList[index].status=status;
    },
    listDelete(index){
      this.todoList.splice(index,1);
    },
    listEdit(memo,index){
      this.todoList[index].memo = memo;
    },
  },
      computed: {
        countDone(){
          let count=0;
          this.todoList.forEach(list =>{
            if(list.status === 'done') count++
          })
          return count;
        }
      },
};
</script>
