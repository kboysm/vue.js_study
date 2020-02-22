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
            :value="isError"
            type="error">
                아이디와 비밀번호를 확인해 주세요.
            </v-alert>
            <v-alert 
            :value="loginSuccess"
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
                @click="login()"
                >로그인</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data(){
        return{
            email:null,
            password:null,
            allUsers:[
                {id:1,name:'LSM',email:'QWE@naver.com',password:'1234'},
                {id:2,name:'QWE',email:'ASD@naver.com',password:'1234'},
                {id:3,name:'TGF',email:'ZXC@naver.com',password:'1234'},
            ],
            isError:false,
            loginSuccess:false,
        }
    },
    methods:{
        login(){
            let selectedUser = null
            this.allUsers.forEach(user=>{
                if(user.email === this.email) {selectedUser =user}
            })
            selectedUser === null ?this.isError=true:
            selectedUser.password !== this.password?
            this.isError=true:
            this.loginSuccess=true;
            }
            
        }
    }
  
</script>