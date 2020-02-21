<template>
    <v-layout
    row wrap pt-5 text-xs-center
    style="max-width:500px;margin:0 auto;"
    >
    <v-flex xs12>
        <h1>users.vue</h1>
        <p>유저를 검색해 주세요</p>
    </v-flex>
    <v-flex xs12>
        <v-text-field
        v-model="userId"
        label='유저 번호를 입력하세요.'
        ></v-text-field>
         <!-- 
        <v-btn @click="$router.push({path:`users/${userId}`})">검색</v-btn>
          -->
        <v-btn @click="$router.push({name:'users-detail',params:{
            id:userId
        }})">검색</v-btn>
    </v-flex>
    <v-flex xs12>
        <router-view></router-view>
    </v-flex>
    </v-layout>
</template>

<script>

export default {
    data(){
        return{
            userId:null
        }
    },
    created() {
        console.log('users created')
    },



    //컴포넌트 내에서 쓰는 라우터 가드
    beforeRouteEnter (to, from, next) {
        console.log('before Enter');
        next();
    },//컴포넌트 내에서 쓰는 라우터 가드
    beforeRouteLeave (to, from, next) {
        console.log('before Leave')
        next();
    },

    destroyed() {
        console.log('destroyed')
    },
}
</script>