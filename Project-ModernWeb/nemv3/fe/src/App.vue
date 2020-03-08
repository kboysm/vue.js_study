<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense v-for="(item,index) in items" :key="index">
        <v-list-item router :to='item.to' exact>
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Mode--> {{title }} (===) Path-->{{ $apiRootPath }}</v-toolbar-title>
      <v-spacer></v-spacer>
       <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

         <v-list>
            <v-list-item v-if="!$store.state.token" @click="$router.push('sign')">
              <v-list-item-title>로그인</v-list-item-title>
            </v-list-item>
            <v-list-item v-else @click="signOut">
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
      </v-menu>
      
    </v-app-bar>

    <v-content>
     <router-view></router-view>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    
    data: () => ({
      title:process.env.NODE_ENV,
      drawer: null,
      items:[
        {icon:'mdi-home',
         title:'Home',
        to: {
              path: '/'
            }},
        {icon:'mdi-contact-mail',
         title:'about',
         to: {
              path: '/about'
            }},
        {icon:'mdi mdi-account',
         title:'user',
         to: {
              path: '/user'
            }},
        {icon:'mdi mdi-account',
         title:'header',
         to: {
              path: '/header'
            }},
        {icon:'mdi mdi-account',
         title:'sign',
         to: {
              path: '/sign'
            }},
      ]
    }),
    methods: {
      signOut () {
      // localStorage.removeItem('token')
      this.$store.commit('delToken')
      this.$router.push('/')
    }
    },
  }
</script>