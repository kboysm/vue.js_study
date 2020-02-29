<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense 
      v-for="(user,idx) in items" 
      :key="idx"
      >
        <v-list-item link :to=user.to exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{user.title}}</v-list-item-title>
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
      <v-toolbar-title>Application</v-toolbar-title>


      <v-spacer></v-spacer>

      <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-if="!$store.state.token" @click="$router.push({name:'로그인'})">
          <v-list-item-title>로그인</v-list-item-title>
        </v-list-item>
        <v-list-item v-else @click="signOut">
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->


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
  name: 'App',
  data () {
    return {
      drawer: null,
      items: [
        {
          icon: 'home',
          title: 'lv0',
          to: {
            path: '/'
          }
        },
        {
          icon: 'home',
          title: 'lv1',
          to: {
            path: '/lv1'
          }
        },
        {
          icon: 'home',
          title: 'lv2',
          to: {
            path: '/lv2'
          }
        },
        {
          icon: 'home',
          title: 'lv3',
          to: {
            path: '/lv3'
          }
        },
        {
          icon: 'face',
          title: '사용자관리',
          to: {
            path: '/user'
          }
        },
        {
          icon: 'face',
          title: '페이지관리',
          to: {
            path: '/page'
          }
        }
      ],
      title: this.$apiRootPath
    }
  },
  mounted () {
  },
  methods: {
    signOut () {
      this.$store.commit('delToken')
      this.$router.push('/')
    }
  }
}
</script>