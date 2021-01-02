const cheerio = require('cheerio');
const prettifyHtml = require('prettify-html');

module.exports = (page) => {
    const doc = cheerio.load(page.html);
    doc('body script').remove();
    doc('head link').remove();
    doc('head').append('<link rel="stylesheet" href="/style.css">');
    doc('head').append('<script type="application/javascript" src="/script.js">');
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
    html = html.replace(/id="downloadCVBtn"/g, `onclick=""`);
    html = html.replace(/ <div id="replaceScrpt"><\/div>/g, '<script>window.onload=function(){html2pdf(document.getElementById("pdfContent"))}</script>');

    page.html = "<!doctype html>\n" + prettifyHtml(html);

    try {
        page.html = JSON.stringify(page);
    } catch (err) {
    }

    return page
}