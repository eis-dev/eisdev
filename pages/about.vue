<template>
    <div id="aboutPage">
        <h1>about</h1>
        <nuxt-content class="pb-3" :document="text"/>
        <Summary :cv="cv" class="nuxt-content"/>
        <DownloadCv/>
    </div>
</template>

<script>
    import cv from "../assets/js/cv";

    export default {
        data() {
            return {cv}
        },
        head() {
            return {
                title: "about | eisdev",
                meta: [
                    {name: 'robots', content: 'noindex'},
                    {name: 'googlebot', content: 'noindex'},
                    {name: 'googlebot-news', content: 'noindex'}
                ]
            }
        },
        async asyncData({$content, params}) {
            let text = await $content('pages', 'about').fetch();
            text = JSON.stringify(text).replace(/www./g, '');
            text = JSON.parse(text);
            return {text}
        }
    }
</script>