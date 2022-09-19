<template>
  <div class="top-page">
    <Header/>
    <Top />
    <AboutSection />
    <IllustSection/>
    <IllustCard/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Header from '~/components/Header.vue';
  import Top from '~/components/home/Top.vue';
  import AboutSection from '~/components/home/AboutSection.vue';
  import IllustSection from '~/components/home/IllustSection.vue';
  import IllustCard from '~/components/components/IllustCard.vue';

  export default Vue.extend({
      name: "IndexPage",
      components: { Header, Top, AboutSection, IllustSection, IllustCard}
  })
</script>

<style lang="scss">
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
