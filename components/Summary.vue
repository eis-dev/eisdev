<template>
    <div id="content">
        <p v-html="cv.about.intro.replace('{year}', (new Date().getFullYear() - 2013))"/>
        <ul class="summary-list list-unstyled">
            <li>
                {{cv.about.skillsText}}
                <div class="skills pt-1 pb-2">
                    <span v-for="skill in cv.about.skills" v-text="skill"/>
                </div>
            </li>
            <li v-for="item in cv.about.items" v-html="item"/>
        </ul>
        <p v-html="cv.about.closing"/>
    </div>
</template>

<script>
    export default {
        name: "Summary",
        props: ["cv"]
    }
</script>
