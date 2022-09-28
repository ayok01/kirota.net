<template>
    <div>
      <Header />
      <nuxt />
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Header from '~/components/Header.vue';

  export default Vue.extend({
      name: "IndexPage",
      components: { Header}
  })
</script>