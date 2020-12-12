export default {
    head: {
        title: 'eisdev',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
        ]
    },
    css: ['@/assets/style.css'],
    plugins: [],
    components: true,
    buildModules: [],
    modules: ['@nuxt/content', 'bootstrap-vue/nuxt'],
    content: {
        fullTextSearchFields: ['title', 'description'],
        liveEdit: false
    },
    build: {},
    target: 'static',
    generate: {
        subFolders: false,
        fallback: false
    }
}
