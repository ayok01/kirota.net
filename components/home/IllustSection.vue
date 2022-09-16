<template>
    <section class="illustration">
        <SectionTitle :title="illustTitle"/>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue'
    import SectionTitle from "~/components/components/SectionTitle.vue";
    export default Vue.extend({
        components:{SectionTitle},
        data(){
            return{
                illustTitle: 'illustration'
            }
        }
    })
</script>

<style lang="scss">
    
</style>