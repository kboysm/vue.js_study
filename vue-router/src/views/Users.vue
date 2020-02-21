<template>
    <div>
        <h1>users.vue</h1>
        <p>이 유저는 현재 유저 번호가 {{userId}} 입니다.</p>
        <p>{{$route.params.name}}</p>
        <p>{{$route.query.group}}</p>
        <p>{{$route.query.category}}</p>
    </div>
</template>

<script>

export default {
    computed: {
        userId(){
            return this.$route.params.userId
        }
    },
}
</script>