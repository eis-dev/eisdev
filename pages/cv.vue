<template>
    <div>
        <section slot="pdf-content" id="pdfContent">
            <div class="a4">
                <Particular :cv="cv"/>
                <Summary :cv="cv" class="summary-content"/>
                <Knowledge :cv="cv"/>
                <div id="replaceScrpt"></div>
            </div>
        </section>
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
                title: "Eyüp IŞIK CV | eisdev",
                meta: [
                    {name: 'robots', content: 'noindex'},
                    {name: 'googlebot', content: 'noindex'},
                    {name: 'googlebot-news', content: 'noindex'}
                ]
            }
        },
        layout: "empty",
        beforeMount() {
            this.$options.components.VueHtml2pdf = require('vue-html2pdf').default
        },
        async asyncData({$content, params}) {
            let text = await $content('pages', 'about').fetch();
            text = JSON.stringify(text).replace(/http:\/\//g, '').replace(/https:\/\//g, '');
            text = JSON.parse(text);
            return {text}
        }
    };
</script>