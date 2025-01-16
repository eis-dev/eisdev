<template>
    <a href="/EYUP_ISIK_CV.pdf" target="_blank" class="primary-button p-4 mt-5 mb-4" v-text="'Download CV'"/>
    <nuxt-link v-if="false" to="/cv" class="primary-button p-4 mt-5 mb-4" v-text="'Download CV'"/>
</template>

<script>
    export default {
        name: "DownloadCV"
    }
</script>
