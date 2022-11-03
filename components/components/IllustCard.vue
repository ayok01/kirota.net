<template>
  <div class="illustCard drop-shadow">
    <div class="illustCard__image">
      <img :src="illustThumbnailImg" />
    </div>
    <div class="illustCard__description">
      <div class="illustCard__description--modifier">
        <div class="illustCard__description--modifier__title">
          {{ illustTitle }}
        </div>
        <div class="illustCard__description--modifier__description">
          制作時間{{ makingTime }}時間 :制作期間{{ makingPeriod }}日
          <br />
          {{ makeDate }}
        </div>
      </div>
      <button
        @click="foveriteCounter++"
        class="b-button illiustCard__description--social"
      >
        <img src="~/static/favorite_icon.svg" />
        <div class="count">{{ foveriteCounter }}</div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    illustThumbnailImg: {
      type: String,
      default:
        "https://storage.googleapis.com/misskey-kirota-server/misskey-kirota-server/72b68c20-cbc1-419d-91c2-574efe5448bc.png",
    },
    illustTitle: {
      type: String,
      default: "Title",
    },
    makingTime: {
      type: Number,
      default: 0,
      required: true,
    },
    makingPeriod: {
      type: Number,
      default: 0,
      required: true,
    },
    makeDate: {
      type: String,
      default: "2022/02/02",
    },
    foveriteCounter: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  computed: {},
})
</script>

<style lang="scss" scoped>
.illustCard {
  /* illustration Tile */
  /* オートレイアウト */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  gap: 10px;

  width: 733px;
  height: 488px;
  &__image {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 35px;
    }
  }
  &__description {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 673px;
    height: 69px;
    &--modifier {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 50px;
      gap: 10px;
      width: 478px;
      height: 53px;
      &__title {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        /* ボックスの高さと同一 */
        text-align: center;
      }
      &__description {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: right;
        color: #7b7b7b;
        width: 100%;
      }
    }
    .b-button {
      /* オートレイアウト */
      display: flex;
      align-items: center;
      justify-self: center;
      padding: 10px 30px;
      gap: 10px;

      img {
        padding: 5px 4px;
        gap: 10px;
        width: 25px;
        height: 25.58px;
      }
      .count {
        width: 22px;
        height: 24px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-align: center;

        color: #7b7b7b;
      }
    }
  }
}
</style>
