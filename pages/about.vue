<template>
    <div id="aboutPage">
        <h1>about</h1>
        <Summary/>
        <DownloadCv/>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: "about | eisdev",
                meta: [
                    {name: 'robots', content: 'noindex'},
                    {name: 'googlebot', content: 'noindex'},
                    {name: 'googlebot-news', content: 'noindex'}
                ]
            }
        },
        async asyncData({$content, params}) {
            let text = await $content('pages', 'about').fetch();
            text = JSON.stringify(text).replace(/www./g, '');
            text = JSON.parse(text);
            return {text}
        }
    }
</script>