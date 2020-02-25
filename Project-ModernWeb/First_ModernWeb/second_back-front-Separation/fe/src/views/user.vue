<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(u,i) in users" :key="i">
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      user name : {{u.name}}
    </v-card-title>

    <v-card-subtitle>
      user age : {{u.age}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn
        color="purple"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="u.show = !u.show"
      >
        <v-icon>{{ users[i].show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="u.show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
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
    }
  },
  methods: {
    
  },
  mounted() {
    axios.get('http://localhost:3000/api/user')
    .then(res=>{
      this.users = res.data.user
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  },
}
</script>