<template>
    <div>
        <nuxt-content :document="text"/>
        <nuxt-link to="/articles/page/1" class="ext-html primary-button mt-3 back-btn" v-text="'back'"/>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: this.title + " | eisdev"
            }
        },
        async asyncData({$content, params}) {
            const text = await $content('articles', params.slug).fetch();
            const title = text.body.children[0].children[1].value;
            return {title, text}
        }
    }
</script>
