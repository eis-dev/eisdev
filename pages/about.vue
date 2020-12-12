<template>
  <div>
    <h1>about</h1>
    <nuxt-content id="content" :document="text"/>
  </div>
</template>

<script>

  export default {
    async asyncData({$content, params}) {
      const text = await $content('pages', 'about').fetch();
      return {text}
    }
  }
</script>
