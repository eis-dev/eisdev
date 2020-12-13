<template>
    <div id="content" class="nuxt-content summary-content">
        <p v-html="cv.about.intro.replace('{year}', (new Date().getFullYear() - 2012))"/>
        <ul>
            <li>
                <p v-html="cv.about.skillsText"/>
                <div class="pl-3">
                  <span v-for="(skill, index) in cv.about.skills"
                        v-text="skill + (index < cv.about.skills.length - 1 ? ', ' : '.')"/>
                </div>
            </li>
            <li v-for="item in cv.about.items" v-html="item"/>
        </ul>
        <p v-html="cv.about.closing.replace('{year}', (new Date().getFullYear() - 2012))"/>
    </div>
</template>

<script>
    export default {
        name: "Summary",
        computed: {
            cv() {
                return require("../content/cv.json")
            }
        }
    }
</script>

<style scoped>

    .summary-content li {
        margin-top: .5rem;
    }

    .summary-content p {
        margin-bottom: .25rem;
    }
</style>