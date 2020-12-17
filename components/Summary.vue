<template>
    <div id="content" class="summary-content">
        <p v-html="cv.about.intro.replace('{year}', (new Date().getFullYear() - 2012))"/>
        <ul>
            <li>
                <p v-html="cv.about.skillsText"/>
                <div class="skills pt-1 pb-3">
                  <span v-for="(skill, index) in cv.about.skills" v-text="skill"/>
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
    li {
        margin-top: .5rem;
    }

    p {
        margin-bottom: .25rem;
    }

    /*.skills span {
        display: inline-block;
        background: #ebebeb;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        margin-bottom: .5rem;
        color: #000000;
    }*/

    .skills span {
        margin-right: 1rem;
    }

    .skills span::after {
        content: ', '
    }

    .skills span:last-child::after {
        content: '.'
    }

    .summary-content {
        font-size: 1rem;
        color: #505050;
        font-weight: 400;
        text-align: justify;
    }

    a {
        color: inherit;
        text-decoration: underline;
    }

    .contact-table a {
        color: inherit;
        text-decoration: none;
    }

    ul li::marker {
        color: inherit;
        font-size: inherit;
    }

    ul li {
        padding-left: 4px;
    }

    ul p {
        margin-bottom: .25rem;
    }

    li {
        margin-bottom: .75rem;
    }
</style>