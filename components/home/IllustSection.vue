<template>
  <section class="illustration">
    <SectionTitle :title="illustTitle" />
    <div class="carousel">
      <ul class="carousel-area">
        <li class="carousel-list">
          <IllustCard />
        </li>
      </ul>
    </div>
    <div class="more-title">
      <a :href="moreUrl" class="more-title--modifer">more</a>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import SectionTitle from "~/components/components/SectionTitle.vue"
import IllustCard from "../components/IllustCard.vue"
export default Vue.extend({
  components: { SectionTitle, IllustCard },
  props: {
    moreUrl: {
      type: String,
      default: "/",
    },
  },
  data() {
    return {
      illustTitle: "illustration",
    }
  },
})
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
.carousel {
  border-radius: 35px;
  box-shadow: inset 4px 4px 3px rgba(0, 0, 0, 0.25),
    inset -4px -4px 4px rgba(255, 255, 255, 0.5);
  width: 80vw;
  padding: 20px 0;
  margin: 0 auto;
  overflow-x: auto;
}
.carousel-area {
  margin-left: 300px;
  width: 4265px;
  padding: 0 100px;
  display: flex;
  -webkit-overflow-scrolling: touch;
}
.carousel-list {
  width: 733px;
  margin-right: 120px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.more-title {
  text-align: center;
  padding: 30px 0;
  &--modifer {
    justify-content: center;
    text-decoration: none;
    color: #000;
  }
}

@media screen and (max-width: 600px) {
  .carousel {
    width: 733px;
    height: calc(733px * 0.5625);
  }
  .carousel-area {
    width: 1500px;
  }
  .carousel-list {
    width: 733px;
    height: calc(733px * 0.5625);
    margin-right: 0;
  }
}

.carousel::-webkit-scrollbar {
  width: 20px;
  height: 7px;
}

.carousel::-webkit-scrollbar-thumb {
  border-radius: 7px;
}

.carousel::-webkit-scrollbar-track {
  border-radius: 7px;
}

//@keyframes slide_cont4 {
// 0% { margin-left: 366.5px; }
// 25% { margin-left: -486.5px; }
// 50% {margin-left: -1339.5px;}
// 75% { margin-left: -2192.5px; }
// 100% { margin-left: 366.5px; }
//}
//
//.carousel-area  {
// animation-name: slide_cont4;
// animation-duration: 10s;
// animation-delay: 5s;
// animation-iteration-count: infinite;
//}
</style>
