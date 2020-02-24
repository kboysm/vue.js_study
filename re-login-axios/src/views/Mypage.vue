<template>
    <div>
        {{userInfo.first_name}} {{userInfo.last_name}} 님의 마이페이지
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['userInfo'])
    }
}
</script>