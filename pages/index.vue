<template>
  <div class="top-page">
    <Header/>
    <Top />
    <AboutSection />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Header from '~/layouts/Header.vue';
  import Top from '~/components/Top.vue';
  import AboutSection from '~/components/AboutSection.vue';

  export default Vue.extend({
      name: "IndexPage",
      components: { Header, Top, AboutSection}
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
