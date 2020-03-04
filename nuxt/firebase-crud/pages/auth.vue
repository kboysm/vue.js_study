<template>
  <v-card>
    <v-card-title>
      1시간 해매서 한 결과 : 
      파이어베이스 콘솔에서 Authentication의 로그인 방법을 설정해주고 firebase.js 플러그인에서 firebase/auth를 추가 후 Vue의 프로토타입으로 지정해주어야 함
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="form.email" label="email"></v-text-field>
        <v-text-field
          v-model="form.password"
          label="password"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-text>
      <v-textarea
      v-model="msg"
      >
      </v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="signUp">
        signUp
      </v-btn>
      <v-btn @click="getUser">
        getUser
      </v-btn>
      <v-btn @click="setUser">
        setUser
      </v-btn>
      <v-btn @click="sighOut">
        sighOut
      </v-btn>
      <v-btn @click="signIn">
        signIn
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      msg: ''
    }
  },
  mounted() {
      //event hook
      this.$auth.onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log('user ok')
        } else {
            // No user is signed in.
            console.log('user null')
        }
        });
  },
  methods: {
    async signUp() {
      try {
        const r = await this.$auth.createUserWithEmailAndPassword(
          this.form.email,
          this.form.password
        )
        console.log(r)
      } catch (e) {
        console.error(e.message)
      }
    },
    getUser(){
        const u = this.$auth.currentUser
        this.msg=JSON.stringify(u)
    },
    async setUser(){
        const u = this.$auth.currentUser
        try{
            const r = await u.updateProfile({
                displayName:this.form.email
            })
            console.log(r)
        }catch(e){
            console.error(e.message)
        }

    },
    async sighOut(){
        try{
            const r =await this.$auth.signOut()
            console.log(r)
        }catch(e){
            console.error(e.message)
        }
    },
    async signIn() {
      try {
        const r = await this.$auth.signInWithEmailAndPassword(
          this.form.email,
          this.form.password
        )
        console.log(r)
      } catch (e) {
        console.error(e.message)
      }
    },
    getUser(){
        const u = this.$auth.currentUser
        this.msg=JSON.stringify(u)
    },
  }
}
</script>