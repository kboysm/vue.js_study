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


      <v-flex xs12 sm4 class="pb-2" v-for="i in 3" :key="i+10">
        <v-card>
          <v-card-title primary-title>
            <span class="grey--text">주간 게시물 현황</span>
          </v-card-title>
          <v-card-text>
            <trend
              :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
              :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
              auto-draw
              smooth>
            </trend>
          </v-card-text>
        </v-card>
      </v-flex>


      <v-flex xs12 sm4 class="pb-2" v-for="i in 3" :key="i+20">
        <v-card>
          <v-toolbar color="orange" text>
            <v-toolbar-title>최근 게시물</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi mdi-account-search</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
              >
                {{ item.header }}
              </v-subheader>

              <v-divider
                v-else-if="item.divider"
                :inset="item.inset"
                :key="index"
              ></v-divider>

              <v-list-item
                v-else
                :key="item.title"
                omit
                
              >
                <v-list-item-avatar>
                  <img :src="item.avatar">
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-flex>


    </v-layout>
  </v-container>
</template>
<script>
import linkCard from '@/components/dashboard/linkCard'

export default {
  components: { linkCard }
  ,
  data(){
    return{
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    }
  }
}
</script>