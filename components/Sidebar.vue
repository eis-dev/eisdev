<template>
    <div>
        <h1 class="title mb-lg-3 d-flex align-items-center justify-content-between">
            <NuxtLink to="/" class="title logo text-decoration-none" v-text="'eisdev'"/>
        </h1>
        <div class="menu-area mb-4 pb-2">
            <NuxtLink :to="'/'+item.link" class="title link text-decoration-none" v-for="item in menu"
                      :class="{'menu-active': isActive(item.link)}" v-text="item.title"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                menu: {
                    about: {
                        title: "about",
                        link: "about"
                    },
                    articles: {
                        title: "articles",
                        link: "articles/page/1"
                    },
                    works: {
                        title: "works",
                        link: "works/page/1"
                    },
                    contact: {
                        title: "contact",
                        link: "contact"
                    },
                }
            }
        },
        methods: {
            isActive(link) {
                link = link.split("/")[0];
                let fullPath = this.$route.fullPath.split("/")[1];
                return link === fullPath;
            }
        }
    }
</script>
