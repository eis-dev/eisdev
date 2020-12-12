<template>
  <div>
    <nuxt-content :document="text"/>
    <nuxt-link to="/works/page/1" class="primary-button mt-3 back-btn" v-text="'back'"/>
  </div>
</template>

<script>
  export default {
    async asyncData({$content, params}) {
      const text = await $content('works', params.slug).fetch();
      return {text}
    }
  }
</script>
