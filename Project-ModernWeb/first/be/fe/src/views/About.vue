<template>
  <v-container grid-list-md text-xs-center>
      <v-textarea
        outline
        v-model="ta"
        >
      </v-textarea>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="x in 4" :key="x">
         <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
            <v-chip>{{x}}</v-chip>
            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

  </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      ta: 'debug'
    }
  },
  mounted () {
    console.log(JSON.stringify(this.$vuetify.breakpoint.md))
  }
}
</script>