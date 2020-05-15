<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <site-title :title="site.title" />

      <v-spacer></v-spacer>
      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <site-menu :drawer="drawer" :items="site.menu" />
    <v-content>
      <router-view></router-view>
    </v-content>
    <site-footer :footer="site.footer" />
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
      site: {
        menu: [
          {
            title: "home",
            icon: "mdi-home",
            subItems: [
              { title: "Dashboard", to: "/" },
              {
                title: "About",
                to: "/about"
              }
            ],
            to: "/"
          },
          {
            title: "about",
            active: true,
            icon: "mdi-account",
            subItems: [
              {
                title: "xxx",
                to: "/xxx"
              }
            ]
          },
          { title: "Sub", icon: "mdi-account-alert" }
        ],
        footer: "LSM Footer",
        title: "Components Title"
      },
      drawer: false,

      right: null
    }
  },
  created() {
    this.subscribe()
  },
  methods: {
    subscribe() {
      this.$firebase
        .database()
        .ref()
        .child("site")
        .on(
          "value",
          sn => {
            const v = sn.val()
            if (!v) {
              this.$firebase
                .database()
                .ref()
                .child("site")
                .set(this.site)
              return
            }
            this.site = v
          },
          e => {
            console.log(e.message)
          }
        )
    }
  }
}
</script>
