<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
     <v-flex xs12 sm6 md4 v-for="user in users" :key="user._id">
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{user.name}}</h3>
              <div>{{user.age}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn text color="orange" @click="putDialog(user)">수정</v-btn>
            <v-btn text color="error" @click="delUser(user._id)">삭제</v-btn>
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
            <v-icon>mdi-account-plus</v-icon>
        </v-btn>
    </v-layout>
         <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="userName"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="userAges"
                  label="Age"
                  required
                  v-model="userAge"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="putUser">수정</v-btn>
          <v-btn color="blue darken-1" text @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="postUser">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        <v-snackbar
        v-model="snackbar"
        >
        {{ sbMsg }}
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
  data () {
    return {
        snackbar: false,
      sbMsg: '',
      users: [],
      getMd: '',
      postMd: '',
      putMd: '',
      delMd: '',
      dialog: false,
      userAges: [],
      userAge: 0,
      userName: '',
      putId: ''
    }
  },
  mounted () {
      for (let i = 10; i < 40; i++) this.userAges.push(i)
      this.getUsers()
  },
  methods: {
      putDialog (user) {
      this.putId = user._id
      this.dialog = true
      this.userName = user.name
      this.userAge = user.age
    },
    putUser () {
      this.dialog = false
      axios.put(`http://localhost:3000/api/user/${this.putId}`, {
        name: this.userName, age: this.userAge
      })
        .then((r) => {
          this.pop('사용자 수정 완료')
          this.getUsers()

        })
        .catch((e) => {
          this.pop(e.message)
        })
    },
    delUser (id) {
      axios.delete(`http://localhost:3000/api/user/${id}`)
        .then((r) => {
          this.pop('사용자 삭제 완료')
          this.getUsers()
        })
        .catch((e) => {
          this.pop(e.message)
        })
    },
      getUsers () {
      axios.get('http://localhost:3000/api/user')
        .then((r) => {
          console.log(r.data)
          this.users = r.data.users
        })
        .catch((e) => {
        this.pop(e.message)
        })
    },
    postUser () {
      this.dialog = false
      axios.post('http://localhost:3000/api/user', {
        name: this.userName, age: this.userAge
      })
        .then((r) => {
          this.pop('사용자 등록 완료')
        })
        .catch((e) => {
          this.pop(e.message)
        })
    },
    mdUp () {
      this.userName = ''
      this.userAge = ''
      this.dialog = true
    },
    pop (msg) {
        this.snackbar = true
        this.sbMsg = msg
    },
   
  }
}
</script>