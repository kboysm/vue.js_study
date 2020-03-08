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
            <v-list-item v-if="!$store.state.token" @click="$router.push('/sign')">
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
        {
          icon: 'mdi-home',
          title: 'lv0',
          to: {
            path: '/'
          }
        },
        {
          icon: 'mdi-home',
          title: 'lv1',
          to: {
            path: '/lv1'
          }
        },
        {
          icon: 'mdi-home',
          title: 'lv2',
          to: {
            path: '/lv2'
          }
        },
        {
          icon: 'mdi-home',
          title: 'lv3',
          to: {
            path: '/lv3'
          }
        },
        {icon:'mdi mdi-account',
         title:'사용자 관리',
         to: {
              path: '/user'
            }},
        {
          icon: 'face',
          title: '페이지관리',
          to: {
            path: '/page'
          }
        }
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