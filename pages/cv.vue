<template>
    <div style="display: none">
        <section slot="pdf-content" id="pdfContent">
            <div class="a4">
                <div class="cv-image"
                     :style="{background: 'url(' + cv.image.source + ')', backgroundSize: cv.image.size, backgroundPosition: cv.image.position, height: cv.image.height}"/>
                <div class="top-el">
                    <div class="profile-info">
                        <h3 class="profile-name mb-0 pb-2" v-text="cv.name"/>
                        <h5 class="profile-desc mb-0" v-text="cv.title"/>
                    </div>
                    <div class="contact-info" :style="{height: 'calc(' + cv.image.height + ' - 7rem - 3px)'}">
                        <table class="w-100 h-100 contact-table">
                            <tr>
                                <td v-text="cv.birth"/>
                                <td v-text="cv.tel"/>
                            </tr>
                            <tr>
                                <td v-text="cv.address"/>
                                <td>
                                    <a :href="'mailto:' + cv.mail" v-text="cv.mail"/>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <Summary/>

                <div class="row mt-4">
                    <div class="col-5 pr-3 py-2">
                        <table class="h-100 infos-table">
                            <tr>
                                <td class="pr-3 pb-2" v-text="'Education'"/>
                                <td class="pl-1">
                                    <div class="mb-2" v-for="item in cv.education">
                                        <p class="mb-0" v-text="item.name"/>
                                        <p class="mb-0 text-grey" v-text="item.info"/>
                                    </div>
                                </td>
                            </tr>
                            <tr class="pt-3 spacer">
                                <td v-text="'Language'" class="pr-3 pb-2"/>
                                <td class="pl-1">
                                    <div class="mb-2" v-for="item in cv.languages">
                                        <span v-text="item.name"/>
                                        <span class="text-grey" v-text="'(' + item.degree + ')'"/>
                                    </div>
                                </td>
                            </tr>
                            <tr class="pt-3">
                                <td v-text="'M. Service'" class="pr-3"/>
                                <td class="pl-1" v-text="cv.military"/>
                            </tr>
                        </table>
                    </div>
                    <div class="col-7 pl-3 pt-0 pb-1 works-div">
                        <table class="w-100 h-100 works-table">
                            <tr v-for="item in cv.works">
                                <td class="pr-1" v-text="item.name"/>
                                <td class="text-grey" v-text="item.title"/>
                                <td class="text-grey works-time" v-text="item.time"/>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        <div id="replaceScrpt"></div>
    </div>
</template>

<script>
    export default {
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
        mounted() {
            this.downloadCv();
        },
        computed: {
            cv() {
                return require("../content/cv.json")
            }
        },
        methods: {
            downloadCv() {
                this.$refs.html2Pdf.generatePdf()
            }
        },
        async asyncData({$content, params}) {
            let text = await $content('pages', 'about').fetch();
            text = JSON.stringify(text).replace(/http:\/\//g, '').replace(/https:\/\//g, '');
            text = JSON.parse(text);
            return {text}
        }
    };
</script>

<style scoped>
    #pdfContent {
        background: #525659;
        display: flex;
        justify-content: center;
    }

    .back-btn {
        z-index: 99999999 !important;
        position: absolute !important;
        left: 50% !important;
        bottom: 8% !important;
        transform: translateX(-50%) !important;
        background: #272727db;
        color: #ffffff;
        border-radius: 1.25rem;
        padding: .75rem 2rem .85rem !important
    }

    .back-btn:hover {
        background: #272727;
    }

    .back-btn:active {
        background: #000000;
        color: #bbbbbb;
    }

    .a4 {
        width: 800px;
        height: 1100px;
        padding: 2rem;
        background: white;
        box-shadow: 0 0 10px black;
    }

    .top-el {
        position: absolute;
        top: 45px;
        z-index: 0;
        width: 800px;
        margin-left: -2rem;
    }

    .profile-info {
        background: #ececec;
        padding: 1.1rem 1rem 1.2rem 13.25rem;
    }

    .contact-info {
        padding: 1.1rem 1rem 1.2rem 13.25rem;
    }

    .contact-table {
        color: #626262;
        font-size: 17px
    }

    .profile-name {
        font-weight: 600;
    }

    .profile-desc {
        color: #5d5d5d;
        margin-left: 1px;
    }

    .cv-image {
        width: 9.5rem;
        border: 4px solid #e3e3e3;
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
    }

    .nuxt-content {
        font-size: 1rem;
        color: #505050;
        font-weight: 400;
        text-align: justify;
    }

    .nuxt-content a {
        color: inherit;
        text-decoration: underline;
    }

    .contact-table a {
        color: inherit;
        text-decoration: none;
    }

    .nuxt-content ul li::marker {
        color: inherit;
        font-size: inherit;
    }

    .nuxt-content ul li {
        padding-left: 4px;
    }

    #content ul p {
        margin-bottom: .25rem;
    }

    #content li {
        margin-bottom: .75rem;
    }

    .yapbtn {
        position: relative;
        z-index: 9999999;
    }

    .works-div {
        border-left: 1px solid #dddddd;
    }

    .text-grey {
        color: #979797;
    }

    .works-time {
        width: 135px;
    }

    .infos-table tr {
        border-bottom: 1rem solid transparent;
    }
</style>
