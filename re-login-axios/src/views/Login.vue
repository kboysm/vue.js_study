<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-alert 
            :value="isLoginError"
            type="error">
                아이디와 비밀번호를 확인해 주세요.
            </v-alert>
            <v-alert 
            :value="isLogin"
            type="success">
                아이디와 비밀번호를 확인해 주세요.
            </v-alert>
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
              
                <v-toolbar-title>로그인창</v-toolbar-title>
                
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="email"
                    name="login"
                    type="text"
                  />

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn 
                depressed
                block
                @click="login({
                    //name:name -> 은 name으로 축약 가능 객체형태에서 name , age 는 name:name , age:age라는 의미
                    email,password
                })"
                >로그인</v-btn>
                <v-btn @click="test">테스트</v-btn>
                <v-btn @click="postTest">post테스트</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import axios from 'axios'
  export default {
    props: {
      source: String,
    },
    data(){
        return{
            email:null,
            password:null,
        }
    },
    computed:{
        ...mapState(['isLogin','isLoginError'])
    },
    methods:{
        ...mapActions(['login']),
        test(){
          axios
            .get('https://reqres.in/api/users?page=2')
            .then(res=>{
              console.log(res);
            }).catch(err=>{
              console.log(err);
            }).then(()=>{
              //always executed
              console.log('무조건 실행')
            })
        },
        postTest(){
           axios
            .post('https://reqres.in/api/register',{
            "email": "eve.holt@reqres.in",
            "password": "pistol"
            //token이 반환된다.
            })
            .then(res=>{
              console.log(res);
            }).catch(err=>{
              console.log(err);
            })
        }
        },
        
    }
  
</script>