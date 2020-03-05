<template>
  <v-card>
    <v-card-title>
      로그인
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
    <v-card-actions>
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
  async mounted() { //먼저 검증 절차를 진행
    await this.$recaptcha.init()
  },
  methods: {
   
    async signIn() {
      try {
        const token = await this.$recaptcha.execute('login')
        console.log('ReCaptcha token:', token)
        if(!token) return false
        // const r = await this.$auth.signInWithEmailAndPassword(
        //   this.form.email,
        //   this.form.password
        // )

        const r = this.$axios.post('https://us-central1-lsm-first-functions.cloudfunctions.net/auth/signin',{
          email:this.form.email,
          password:this.form.password,
          token:token
        })

        this.$router.push('/')
        console.log(r)
      } catch (e) {
        console.error(e.message)
      }
    },
  }
}
</script>