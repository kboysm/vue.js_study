<template>
  <div>
    <h1>All Users({{ count }})</h1>
    <h1>Seoul Users({{ seouls }})({{ percent }}%)</h1>
    <v-list two-line>
      <v-list-tile 
        v-for="(user, index) in all"
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import {mapState,mapGetters} from 'vuex'
  export default {
    data() {
      return {
       
      }
    },
    computed:{
      ...mapGetters({
        //이 컴포넌트에서는 (name : store의 getters메서드명)에서 name으로 쓰겠다는 의미이다. 
        count:'allUsersCount',
        seouls:'countOfSeoul',
        percent:'percentOfSeoul'
      }),
      //...mapState(['allUsers'])도 가능 대신 v-for문에서 all -> allUsers로 바꿔주어야함
      ...mapState({
        //여기서도 getters와 같음
        all:'allUsers'
      })
      //...mapGetters(['allUsersCount','countOfSeoul','percentOfSeoul'])
    }
    ,
    mounted() {
      EventBus.$on('signUp', users => {
        this.$store.state.allUsers.push(users)
      })
    }
  }
</script>
