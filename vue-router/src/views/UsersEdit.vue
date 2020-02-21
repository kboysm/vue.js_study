<template>
    <div>
        users-edit.vue <br>
        {{userId}}
    </div>
</template>
<script>
export default {
    computed: {
        userId(){
            return this.$route.params.id
        }
    },
    
}
</script>