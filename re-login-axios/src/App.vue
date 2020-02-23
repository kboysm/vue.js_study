<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item router :to="{name:'home'}" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item 
        v-if="isLogin === false"
        router :to="{name:'login'}" 
        exact>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item 
        v-if="isLogin ===true"
        router :to="{name:'mypage'}"
        exact>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>mypage</v-list-item-title>
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
        <v-menu  v-if="isLogin" open-on-hover top offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  flat
                >
                  Dropdown
                </v-btn>
              </template>

              <v-list>
                <v-list-item router :to="{name:'mypage'}">
                  <v-list-item-title>마이페이지</v-list-item-title>
                </v-list-item>
                <v-list-item
                @click="$store.dispatch('logout')"
                >
                  <v-list-item-title>로그아웃</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
      <v-btn 
      v-else
      router :to="{name:'login'}"
      icon>
        로그인
      </v-btn>
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
import {mapState} from'vuex'
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    // methods:{
    //   ...mapActions(['logout'])
    // },
    computed:{
      ...mapState(['isLogin'])
    }
  }
</script>