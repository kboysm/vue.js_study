<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 v-for="user in users" :key="user._id">
        <user-card :user="user"></user-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import userCard  from '@/components/user'

export default {
  components: { userCard  },
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      this.$axios.get('manage/user')
        .then((r) => {
          this.users = r.data.users
        })
        .catch((e) => {
          console.error(e.message)
        })
    }
  }
}
</script>