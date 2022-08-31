<template>
  <div class="top-page">
    <Header/>
    <Top />
    <AboutSection />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Header from '~/components/Header.vue';
  import Top from '~/components/Top.vue';
  import AboutSection from '~/components/AboutSection.vue';

  export default Vue.extend({
      name: "IndexPage",
      components: { Header, Top, AboutSection}
  })
</script>
