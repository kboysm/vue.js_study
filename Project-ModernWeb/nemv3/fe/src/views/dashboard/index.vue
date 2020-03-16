<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
    <v-layout wrap row>
      <v-flex xs12 sm6 md3 class="pb-2" v-for="i in 4" :key="i">
        <v-card>
          <v-container pa-1>
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="grey--text">전체 사용자</div>
                    <h3 class="headline">123</h3>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5>
                <v-card-title primary-title>
                  <v-avatar>
                    <v-icon medium color="success">mdi mdi-account</v-icon>
                  </v-avatar>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-2">
              <v-icon small color="primary">update</v-icon>
              <span class="grey--text caption font-italic">&nbsp;5분전</span>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-container>
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