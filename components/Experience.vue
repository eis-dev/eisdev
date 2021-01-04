<template>
    <div class="col-7 pl-3 pt-0 pb-1 works-div">
        <table class="w-100 h-100 works-table">
            <tr v-for="item in cv.works">
                <td class="pr-1" v-text="item.name"/>
                <td class="text-grey" v-text="item.title"/>
                <td class="text-grey works-time" v-text="item.start + ' – ' + item.end"/>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Experience",
        props: ["cv"]
    }
</script>