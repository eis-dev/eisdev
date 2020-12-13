<template>
  <div>
    <h1>about</h1>
    <nuxt-content id="content" :document="text"/>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: "about | eisdev"
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
