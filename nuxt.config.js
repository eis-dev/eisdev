const cheerio = require('cheerio');
const prettifyHtml = require('prettify-html');

const buildOptions = {
    subFolders: false,
    fallback: false,
    resourceHints: false,
    extractCSS: true,
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'style',
                    test: /\.(css|vue)$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }
}

function hook(page) {
    const doc = cheerio.load(page.html);
    doc('body script').remove();
    doc('head link').remove();
    doc('head').append('<link rel="stylesheet" href="/style.css">');
    doc('#__nuxt').replaceWith(doc('#__nuxt').html());
    doc('#__layout').replaceWith(doc('#__layout').html());
    let html = doc.html().replace(/<!---->/g, "");
    html = html.replace(/ data-n-head="ssr"/g, "");
    html = html.replace(/ data-n-head-ssr/g, "");
    html = html.replace(/data-vue-ssr-/g, "");
    html = html.replace(/nuxt/g, "eisdev");
    html = html.replace(/eisdev-content/g, "nuxt-content");
    html = html.replace(/ eisdev-link-active/g, "");
    html = html.replace(/ eisdev-link-exact-/g, " ");
    html = html.replace(/" class="ext-html /g, '.html" class="');
    let script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = '/script.js'
    document.head.appendChild(script);
    page.html = "<!doctype html>\n" + prettifyHtml(html)
    return page
}

export default {
    head: {
        title: 'eisdev',
        meta: [
            {charset: 'utf-8'},
            {name: 'title', content: 'eisdev'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'},
            {name: 'author', content: 'eisdev'}
        ]
    },
    css: ['@/assets/style.css'],
    components: true,
    buildModules: [],
    modules: ['@nuxt/content', 'bootstrap-vue/nuxt'],
    content: {
        fullTextSearchFields: ['title', 'description'],
        liveEdit: false
    },
    generate: buildOptions,
    render: buildOptions,
    build: buildOptions,
    hooks: {'generate:page': page => hook(page), 'build:page': page => hook(page), 'render:page': page => hook(page)}
}
