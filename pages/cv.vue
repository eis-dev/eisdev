<template>
    <section slot="pdf-content" id="pdfContent">
        <div class="a4">
            <img class="cv-image" :src="image"/>
            <Particular :cv="cv"/>
            <Summary :cv="cv" class="summary-content"/>
            <div class="row mt-4 pt-1">
                <Education :cv="cv"/>
                <Experience :cv="cv"/>
            </div>
            <p class="mt-5 more-p text-right pull-right d-inline-block pt-2 pl-3 text-grey" v-html="more"/>
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
        computed: {
            more() {
                return this.urlify(this.cv.about.more).replace(/\n/g, '<br/>')
            }
        },
        methods: {
            urlify(text) {
                return text.replace(/(https?:\/\/[^\s,]+)/g, '<a href="$1">$1</a>').replace(/>https?:\/\//g, '>')
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