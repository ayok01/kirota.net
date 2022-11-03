<template>
  <div>
    <h2 class="title-frame">
      {{ title }}
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: ["title"],
})
</script>

<style lang="scss">
.title-frame {
  /* Frame 27 */
  /* オートレイアウト */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 70px;
  gap: 10px;

  /* オートレイアウト内部 */
  align-self: stretch;

  /* About */
  font-style: normal;
  font-weight: 100;
  font-size: 40px;
  line-height: 48px;
}
</style>
