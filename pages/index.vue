<template>
  <div class="top-page">
    <Header/>
    <Top />
    <AboutSection />
    <IllustSection/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Header from '~/layouts/Header.vue';
  import Top from '~/components/home/Top.vue';
  import AboutSection from '~/components/home/AboutSection.vue';
  import IllustSection from '~/components/home/IllustSection.vue';

  export default Vue.extend({
      name: "IndexPage",
      components: { Header, Top, AboutSection, IllustSection }
  })
</script>

<style>
  /*---- index ----*/
.top-page{
  /* オートレイアウト */
  
  display: flex;
  flex-direction: column;
  
  padding: 0px;
  gap: 3vh;
  
  position: relative;
  
  }


</style>
