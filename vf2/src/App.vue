<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <site-title :title="title" />
      <v-spacer></v-spacer>
      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <site-menu :drawer="drawer" />
    <v-content>
      <router-view></router-view>
    </v-content>
    <site-footer :footer="footer" />
  </v-app>
</template>

<script>
import SiteTitle from "@/components/title"
import SiteFooter from "@/components/footer"
import SiteMenu from "@/components/menu"
export default {
  components: { SiteTitle, SiteFooter, SiteMenu },
  name: "App",

  data() {
    return {
      footer: "LSM Footer",
      title: "Components Title",
      drawer: false,

      right: null
    }
  }
}
</script>
