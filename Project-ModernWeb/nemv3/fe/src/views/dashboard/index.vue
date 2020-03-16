<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
    <v-layout wrap row>
      <v-flex xs12 sm6 md3 class="pb-2" v-for="i in 4" :key="i">
        <v-card height="130px" :color="`#${i}00000`">
          각종 현황
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 class="pb-2" v-for="i in 3" :key="i">
        <v-card height="140px" :color="`#${i}12345`">
          간단한 차트
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 class="pb-2" v-for="i in 2" :key="i">
        <v-card height="290px" :color="`#${i}54321`">
          링크, 최근 게시물 같은..
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import linkCard from '@/components/dashboard/linkCard'

export default {
  components: { linkCard }
}
</script>