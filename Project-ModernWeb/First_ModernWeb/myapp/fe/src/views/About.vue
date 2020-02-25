<template>
  <v-container grid-list-md text-xs-center>
    <v-textarea
          v-model="ta"
        ></v-textarea>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="x in 4" :key="x">
          <v-card
    class="mx-auto"
    max-width="400"
    height="100%"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
      <v-chip v-if="x>2">{{x}}</v-chip>
    </v-card-actions>
  </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      ta:'debug'
    }
  },
  mounted() {
    this.ta=JSON.stringify(this.$vuetify.breakpoint.name)
  },
}
</script>