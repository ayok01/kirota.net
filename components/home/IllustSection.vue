<template>
    <section class="illustration">
        <SectionTitle :title="illustTitle"/>
        <div class="illustCardView">
            <IllustCard/>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue'
    import SectionTitle from "~/components/components/SectionTitle.vue";
import IllustCard from '../components/IllustCard.vue';
    export default Vue.extend({
        components:{ SectionTitle, IllustCard },
        data(){
            return{
                illustTitle: 'illustration'
            }
        }
    })
</script>

<style lang="scss">
    
</style>