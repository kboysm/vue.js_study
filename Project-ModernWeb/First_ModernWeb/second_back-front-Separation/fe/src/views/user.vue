<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm3>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
import axios from 'axios'
export default {
  data(){
    return{
      users:[],
      getMd:'',
      postMd:'',
      putMd:'',
      delMd:'',
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
        userName : 'postMan'
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
  },
  mounted() {
    
  },
}
</script>