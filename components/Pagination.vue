<template>
    <nav class="mt-4">
        <ul class="pagination">
            <li class="page-item" v-if="page > 1">
                <NuxtLink class="text-decoration-none" :to="'/'+type+'/page/' + (page-1) + ext">
                    <button class="primary-button mt-2 mr-3">previous</button>
                </NuxtLink>
            </li>
            <li class="page-item" v-if="page < total">
                <NuxtLink class="text-decoration-none" :to="'/'+type+'/page/' + (page+1) + ext">
                    <button class="primary-button mt-2">next</button>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ["total", "type"],
        computed: {
            page() {
                return parseInt(this.$route.params.page);
            },
            ext() {
                return process.browser ? "" : ".html"
            }
        }
    };
</script>
