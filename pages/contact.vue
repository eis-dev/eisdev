<template>
  <div>
    <nuxt-content class="contact-content" :document="text"/>
  </div>
</template>

<script>
  export default {
    async asyncData({$content, params}) {
      let text = await $content('pages', 'contact').fetch();
      text = JSON.stringify(text).replace(/www./g, '');
      text = JSON.parse(text);
      return {text}
    }
  }
</script>
