<template>
    <div id="content">
        <p v-html="cv.about.intro.replace('{year}', (new Date().getFullYear() - 2013))"/>
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
        props: ["cv"]
    }
</script>