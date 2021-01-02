<template>
    <div class="row mt-4">
        <!-- Education -->
        <div class="col-5 pr-3 py-2 education-div">
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

        <!-- Works -->
        <div class="col-7 pl-3 pt-0 pb-1 works-div">
            <table class="w-100 h-100 works-table">
                <tr v-for="item in cv.works">
                    <td class="pr-1" v-text="item.name"/>
                    <td class="text-grey" v-text="item.title"/>
                    <td class="text-grey works-time" v-text="item.start + ' – ' + item.end"/>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Knowledge",
        props: ["cv"]
    }
</script>