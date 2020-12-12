<template>
    <div>
        <nuxt-content :document="text"/>
        <nuxt-link :to="'/articles/page/1'+$config.ext" class="primary-button mt-3 back-btn" v-text="'back'"/>
    </div>
</template>

<script>
    export default {
        async asyncData({$content, params}) {
            const text = await $content('articles', params.slug).fetch();
            return {text}
        }
    }
</script>
