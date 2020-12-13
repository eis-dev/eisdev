<template>
    <nuxt-content class="contact-content" :document="text"/>
</template>

<script>
    export default {
        head() {
            return {
                title: "contact | eisdev",
                meta: [
                    {name: 'robots', content: 'noindex'},
                    {name: 'googlebot', content: 'noindex'},
                    {name: 'googlebot-news', content: 'noindex'}
                ]
            }
        },
        async asyncData({$content, params}) {
            let text = await $content('pages', 'contact').fetch();
            text = JSON.stringify(text).replace(/www./g, '');
            text = JSON.parse(text);
            return {text}
        }
    }
</script>
