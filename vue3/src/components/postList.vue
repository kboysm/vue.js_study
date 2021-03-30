<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>

    </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import { onMounted, onUnmounted, onUpdated } from 'vue'
export default {
    props: ['posts'],
    components: {
        SinglePost
    },
    setup(props) {
        console.log(props)
        onMounted(() => {
            console.log('component onMounted ')
        })
        onUnmounted(() => {
            console.log('component onUnMounted ')
        })
        onUpdated(() => {
            console.log('component onUpdated')
        })

        return {
            
        }
    }
}
</script>

<style>

</style>