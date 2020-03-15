<template>
 <v-container fluid fill-height>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
            <v-toolbar dark color="primary">
            <v-toolbar-title>회원 가입</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
            <ValidationObserver ref="observer" >
                <form>
                <ValidationProvider v-slot="{ errors }" name="Name" rules="required|min:4|max:20">
                    <v-text-field
                    v-model="form.id"
                    :counter="20"
                    :error-messages="errors"
                    label="아이디"
                    required
                    ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="password" rules="passError|min:6|max:40">
                    <v-text-field
                    v-model="form.pwd"
                    :counter="40"
                    type="password"
                    :error-messages="errors"
                    label="비밀번호"
                    required
                    ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="name" rules="required|min:1|max:40">
                    <v-text-field
                    v-model="form.name"
                    :error-messages="errors"
                    label="이름"
                    :counter="40"
                    required
                    ></v-text-field>
                </ValidationProvider>
                
                <vue-recaptcha
                ref="recaptcha"
                :sitekey="$cfg.recaptchaSiteKey"
                size="invisible"
                @verify="onVerify"
                @expired="onExpired"
              >
              </vue-recaptcha>

              <v-spacer></v-spacer>

                <v-btn text @click="submit">가입</v-btn>
                <v-btn text @click="clear">초기화</v-btn>
                </form>
            </ValidationObserver>
            
            <v-snackbar
            v-model="sb.act"
            >
            {{ sb.msg }}
            <v-btn
                :color="sb.color"
                text
                @click="sb.act = false"
            >
                닫기
            </v-btn>
            </v-snackbar>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>
<script>
  import { required, email, max ,min} from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '입력해주세요',
  })
  extend('passError', {
    ...required,
    message: '비밀번호를 조건에 맞게 입력해주세요',
  })

  extend('max', {
    ...max,
    message: '{_field_} 너무 많아요~',
  })
  extend('min', {
    ...min,
    message: '{_field_} 너무 적어요~',
  })

  extend('name', {
    ...email,
    message: '이름 마즘??',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
        form: {
            id: '',
            name: '',
            pwd: ''
            },
        sb: {
            act: false,
            msg: '',
            color: 'warning'
            },
      
      
    }),

    methods: {
      onVerify (r) {
      console.log(r)
      },
      onExpired () {
        this.$refs.recaptcha.reset()
      },
      exec () {
        this.$refs.recaptcha.execute()
      },
      reset () {
        this.$refs.recaptcha.reset()
      },


      submit () {
        this.$refs.observer.validate()
         .then(r => {
          if (!r) throw new Error('모두 기입해주세요')
          return this.$axios.post('register', this.form)
        })
        .then(r => {
          if (!r.data.success) throw new Error('서버가 거부했습니다.')
          this.pop('가입 완료 되었습니다.', 'success')

          this.$router.push('/sign')
        })
        .catch(e => this.pop(e.message, 'warning'))
      },
      clear () {
        this.form.id = ''
        this.form.pwd = ''
        this.form.name = ''
        this.agree = null
        this.$refs.observer.reset()
      },
      pop (m, cl) {
      this.sb.act = true
      this.sb.msg = m
      this.sb.color = cl
    },
    },
  }
</script>