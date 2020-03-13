<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      persistent
      :mini-variant.sync="mini"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>못생겼지롱</v-list-item-title>
              <v-list-item-subtitle>랜덤얼굴</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.icon"
       
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.subItem"
          :key="subItem.title"
           :to='subItem.to'
        >
          <v-list-item-content :to='item.to' >
            <v-list-item-title  v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="siteTitle"></v-toolbar-title>
      <v-spacer></v-spacer>
       <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

         <v-list>
           <template v-if="!$store.state.token">
              <v-list-item @click="$router.push('/sign')">
                <v-list-item-title>로그인</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/register')">
                <v-list-item-title>회원가입</v-list-item-title>
              </v-list-item>
           </template>
              <v-list-item v-else @click="signOut">
                <v-list-item-title>로그아웃</v-list-item-title>
              </v-list-item>
          </v-list>
      </v-menu>
      
    </v-app-bar>

    <v-content>
     <router-view></router-view>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span>{{siteCopyright}}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    mounted() {
      this.getSite()
    },
    data: () => ({
      title:process.env.NODE_ENV,
      drawer: null,
      mini: false,
      siteTitle: '기다리는중',
      siteCopyright: '기다리는중',
      siteDark: false,
      items:[
        {
      icon: 'mdi mdi-account',
      title: '현황',
      act: true,
      subItem: [
        {
          icon:"mdi mdi-account-box",
          title: '오늘',
          to: {
            path: '/'
          }
        }
      ]
    },
            {
          icon: 'mdi mdi-comment-outline',
          title: '게시판 목록',
          act: true,
          subItem: [
            // {
            //   icon: 'mdi mdi-checkbox-blank-outline',
            //   title: '아무나',
            //   to: {
            //     path: '/board/아무나'
            //   }
            // },
            // {
            //   icon: 'mdi mdi-checkbox-blank-outline',
            //   title: '코딩',
            //   to: {
            //     path: '/board/코딩'
            //   }
            // }
          ]
        },
        {
          icon: 'mdi mdi-clipboard-outline',
          title: '권한테스트',
          active:true,
          subItem:[
                    {
                icon: 'mdi-home',
                title: '관리자용 페이지',
                to: {
                  path: '/lv0'
                }
              },
              {
                icon: 'mdi-home',
                title: '슈퍼유저 페이지',
                to: {
                  path: '/lv1'
                }
              },
              {
                icon: 'mdi-home',
                title: '일반유저 페이지',
                to: {
                  path: '/lv2'
                }
              },
              {
                icon: 'mdi-home',
                title: '손님용 페이지',
                to: {
                  path: '/lv3'
                }
              },
          ]
        },
        {
          icon: 'mdi mdi-clipboard-outline',
          title: '관리메뉴',
          subItem: [
                        {
                    icon: 'mdi mdi-clipboard-outline',
                    title: '게시판관리',
                    to: {
                      path: '/manage/boards'
                    }
                  },
                
                  {icon:'mdi mdi-account',
                  title:'사용자 관리',
                  to: {
                        path: '/user'
                      }},
                  {
                    icon: 'mdi mdi-message-draw',
                    title: '페이지관리',
                    to: {
                      path: '/page'
                    }
                  },
                  {
                    icon: 'mdi mdi-message-image',
                    title: '사이트관리',
                    to: {
                      path: '/site'
                    }
                  }
          ]
        },
       
      ]
    }),
     mounted () {
    this.getSite()
    this.getBoards()
  },
    methods: {
      signOut () {
      // localStorage.removeItem('token')
      this.$store.commit('delToken')
      this.$router.push('/')
      },
      getSite () {
      this.$axios.get('/site')
        .then(r => {
          this.siteTitle = r.data.d.title
          this.siteCopyright = r.data.d.copyright
           if(r.data.d.dark) this.$vuetify.theme.dark = true
           else this.$vuetify.theme.dark = false
        })
        .catch(e => console.error(e.message))
    },
     getBoards () {
      this.$axios.get('/board/list')
        .then(({ data }) => {
          console.log(data.ds)
          data.ds.forEach(v => {
            this.items[1].subItem.push({
              title: v.name,
              to: {
                path: `/board/${v.name}`
              }
            })
            console.log(`/board/${v.name}`)
          })
        })
        .catch(e => console.error(e.message))
    }
    },
  }
</script>