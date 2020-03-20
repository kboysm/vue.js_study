<template>
  <div>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-avatar>
          <v-icon>mdi-account</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
          <!-- <v-list-tile-sub-title>subTitle</v-list-tile-sub-title> -->
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-alert",
          title: "about"
        },
        {
          icon: "mdi-alert",
          title: "LSM"
        },
        {
          icon: "mdi-alert",
          title: "GOOD"
        }
      ]
    }
  }
}
</script>
