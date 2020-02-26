<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <!-- <v-flex xs12 sm3>
        <v-card
    class="mx-auto"
    max-width="344"
  >

    <v-card-title>
      Pra-Rest-Api-get
    </v-card-title>

    <v-card-subtitle>
      express-vue-rest-api
    </v-card-subtitle>
    <v-card-text>
      <v-textarea
      v-model="getMd"
      >
      </v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="purple"
        text
        @click="getReq"
      >
        submit
      </v-btn>

    </v-card-actions>
  </v-card>
      </v-flex>
      <v-flex xs12 sm3>
        <v-card
    class="mx-auto"
    max-width="344"
  >

    <v-card-title>
      Pra-Rest-Api-post
    </v-card-title>

    <v-card-subtitle>
      express-vue-rest-api
    </v-card-subtitle>
    <v-card-text>
      <v-textarea
      v-model="postMd"
      >
      </v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="purple"
        text
        @click="postReq"
      >
        submit
      </v-btn>

    </v-card-actions>
  </v-card>
      </v-flex>
      <v-flex xs12 sm3>
        <v-card
    class="mx-auto"
    max-width="344"
  >

    <v-card-title>
      Pra-Rest-Api-put
    </v-card-title>

    <v-card-subtitle>
      express-vue-rest-api
    </v-card-subtitle>
    <v-card-text>
      <v-textarea
      v-model="putMd"
      >
      </v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="purple"
        text
        @click="putReq"
      >
        submit
      </v-btn>

    </v-card-actions>
  </v-card>
      </v-flex>
      <v-flex xs12 sm3>
        <v-card
    class="mx-auto"
    max-width="344"
  >

    <v-card-title>
      Pra-Rest-Api-delete
    </v-card-title>

    <v-card-subtitle>
      express-vue-rest-api
    </v-card-subtitle>
    <v-card-text>
      <v-textarea
      v-model="delMd"
      >
      </v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="purple"
        text
        @click="delReq"
      >
        submit
      </v-btn>

    </v-card-actions>
  </v-card>
      </v-flex> -->
      <v-flex xs12 sm12 sm3 v-for="(u,i) in users" :key="i">
        <v-card
    class="mx-auto"
    max-width="400"
  >

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>name : {{u.name}}</div>

      <div>age : {{u.age}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        @click="putUser"
      >
        수정
      </v-btn>

      <v-btn
        color="error"
        text
        @click="delUser"
      >
        삭제
      </v-btn>
    </v-card-actions>
  </v-card>

      </v-flex>
            <v-btn
              absolute
              dark
              fab
              bottom
              right
              color="pink"
              @click="mdUp"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>

    </v-layout>

       <v-dialog v-model="dialog" persistent max-width="600px">
      
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="name"
                  hint="Name"
                  persistent-hint
                  required
                  v-model="userName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="userAges"
                  label="Age"
                  required
                  v-model="userAge"
                ></v-select>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="postUser">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbar"
    >
      {{sbMsg}}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>



<script>
import axios from 'axios'
export default {
  data(){
    return{
      sbMsg:'',
      snackbar:false,
      dialog:false,
      users:[],
      getMd:'',
      postMd:'',
      putMd:'',
      delMd:'',
      userName:'',
      userAge:0,
      userAges:[],
    }
  },
  methods: {
    //여기서는 api의 동작을 확인만한다.
    getReq(){
      axios.get('http://localhost:3000/api/user',{
        userName : 'getMan'
      })
          .then(res=>{
            this.getMd = JSON.stringify(res.data);
            // this.users = res.data.user
            // console.log(res)
          })
          .catch(err=>{
            console.log(err)
          })
    },
    postReq(){
      axios.post('http://localhost:3000/api/user',{
        name : '기르령송',age:29
      })
          .then(res=>{
            this.postMd = JSON.stringify(res.data);
            // this.users = res.data.user
            // console.log(res)
          })
          .catch(err=>{
            console.log(err)
          })
    },

    //put, delete는 식별자를 찾아가야한다. 보통 params로 넘겨서 찾게함 , delete는 /5같은 형태로 넘김

    putReq(){
      axios.put('http://localhost:3000/api/user',{
        userName : 'putMan'
      })
          .then(res=>{
            this.putMd = JSON.stringify(res.data);
            // this.users = res.data.user
            // console.log(res)
          })
          .catch(err=>{
            console.log(err)
          })
    },
    delReq(){
      axios.delete('http://localhost:3000/api/user')
          .then(res=>{
            this.delMd = JSON.stringify(res.data);
            // this.users = res.data.user
            // console.log(res)
          })
          .catch(err=>{
            console.log(err)
          })
    },
    mdUp(){
       this.dialog = true
    },
    postUser(){
      console.log(this.userName +","+ this.userAge)
      this.dialog = false
      axios.post('http://localhost:3000/api/user',{
        name : this.userName,age:this.userAge
      })
          .then(res=>{
            this.pop('사용자 등록 완료')
            this.getUsers()
          })
          .catch(err=>{
            this.pop(err.message)
            
          })
    },
    pop(msg){
      this.snackbar=true
      this.sbMsg = msg
    },
    getUsers(){
       axios.get('http://localhost:3000/api/user')
          .then(res=>{
            console.log(res.data)
            this.users = res.data.user
            // this.users = res.data.user
            // console.log(res)
          })
          .catch(err=>{
            console.log(err)
          })
    },
    putUser(id){

    },
    delUser(id){

    }
    
  },
  mounted() {
    for(let i=10;i<40;i++) this.userAges.push(i)
    this.getUsers()
  },
}
</script>