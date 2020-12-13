<template>
    <nav class="mt-4">
        <ul class="pagination">
            <li class="page-item" v-if="page > 1">
                <nuxt-link :to="'/'+type+'/page/' + (page-1)" class="ext-html text-decoration-none">
                    <button class="primary-button mt-2 mr-3">previous</button>
                </nuxt-link>
            </li>
            <li class="page-item" v-if="page < total">
                <nuxt-link :to="'/'+type+'/page/' + (page+1)" class="ext-html text-decoration-none">
                    <button class="primary-button mt-2">next</button>
                </nuxt-link>
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
            }
        }
    };
</script>
