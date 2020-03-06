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
      ]
    }),
  }
</script>