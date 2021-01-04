<template>
    <section slot="pdf-content" id="pdfContent">
        <div class="a4">
            <img class="cv-image" :src="image"/>
            <Particular :cv="cv"/>
            <Summary :cv="cv" class="summary-content"/>
            <div class="row mt-4">
                <Education :cv="cv"/>
                <Experience :cv="cv"/>
            </div>
            <div id="replace"></div>
        </div>
    </section>
</template>

<script>
    import cv from "../assets/js/cv";
    import image from "../content/cv/image.jpg";

    export default {
        layout: "empty",
        data() {
            return {cv, image}
        },
        head() {
            return {
                title: "Eyüp IŞIK CV | eisdev",
                meta: [
                    {name: 'robots', content: 'noindex'},
                    {name: 'googlebot', content: 'noindex'},
                    {name: 'googlebot-news', content: 'noindex'},
                    {name: "viewport", content: "width=800, height=1100, user-scalable=no"},
                ]
            }
        },
        beforeMount() {
            this.$options.components.VueHtml2pdf = require('vue-html2pdf').default
        },
        async asyncData({$content}) {
            let text = await $content('pages', 'about').fetch();
            text = JSON.stringify(text).replace(/http:\/\//g, '').replace(/https:\/\//g, '');
            text = JSON.parse(text);
            return {text}
        }
    };
</script>