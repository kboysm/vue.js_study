<template>
    <div>
       <h1> UsersDetail</h1>
       <p>유저 번호 : {{userId}}</p>
       <v-btn
       @click="edit"
       >수정</v-btn>
    </div>
</template>
<script>
export default {
    computed: {
        userId(){
            return this.$route.params.id
        }
    },
    methods: {
        edit(){
            //this.$router.push({name:'users-edit'});
            this.$router.push({path:`${this.userId}/edit`});
            //name은 컴포넌트의 이름을 바로 쓰면 알아서 잘 찾아 들어가지만 path같은 경우는 칠드런에서의 패스를 잘 알고 있어야 한다.
            //users의 하위 칠드렌 라우트이기 때문에 users를 쓰지 않고 경로만 적어주어야 한다.
        }
    },
}
</script>