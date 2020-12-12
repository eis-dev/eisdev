const cheerio = require('cheerio');

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
    generate: {
        subFolders: false,
        fallback: false,
        resourceHints: false
    },
    render: { resourceHints: false },
    build: { resourceHints: false },
    hooks: {
        'generate:page': page => {
            const doc = cheerio.load(page.html);
            doc('body script').remove();
            doc('#__nuxt').replaceWith(doc('#__nuxt').html());
            doc('#__layout').replaceWith(doc('#__layout').html());
            // doc('pre').html(doc(this).html().replace(/\n/g, "thereisblankline"));
            let html = doc.html();
            html = html.replace(/<!---->/g, "");
            html = html.replace(/ data-n-head="ssr"/g, "");
            html = html.replace(/ data-n-head-ssr/g, "");
            html = html.replace(/data-vue-ssr-/g, "");
            html = html.replace(/nuxt/g, "eisdev");
            html = html.replace(/ eisdev-link-active/g, "");
            html = html.replace(/ eisdev-link-exact-/g, " ");
            html = html.replace(/\n/g, "");
            html = html.replace(/  /g, " ");
            html = html.replace(/  /g, " ");
            html = html.replace(/  /g, " ");
            page.html = html;
        },
    }
}
