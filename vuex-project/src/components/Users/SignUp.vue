<template>
  <div>
    <h1>SignUp</h1>
    <v-text-field
      label="아이디"
      v-model="userId"
    ></v-text-field>
    <v-text-field
      label="비밀번호"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-text-field
      label="이름"
      v-model="name"
    ></v-text-field>
    <v-text-field
      label="주소"
      v-model="address"
    ></v-text-field>
    <v-text-field
      label="이미지"
      v-model="src"
    ></v-text-field>
    <v-btn @click="signUp">회원가입</v-btn>
  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        userId: null,
        password: null,
        name: null,
        address: null,
        src: null
      }
    },
    methods: {
      signUp() {
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        //뮤테이션에서 땡겨옴
        this.addUsers(userObj);
        //this.$store.commit('addUsers',userObj) 이 방법으로도 뮤테이션을 실행 가능!
        this.clearForm()
      },
      clearForm() {
        this.userId = null,
        this.password = null,
        this.name = null,
        this.address = null,
        this.src = null
      },
      ...mapMutations(['addUsers'])
    }
  }
</script>