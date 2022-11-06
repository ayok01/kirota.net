<template>
  <header>
    <nav class="header">
      <nuxt-link class="header__title" to="/"> Kirota </nuxt-link>
      <div class="header__nav">
        <div class="header__nav__frame">
          <nuxt-link class="b-button" to="/">About</nuxt-link>
        </div>
        <div class="header__nav__frame">
          <nuxt-link class="b-button" to="/">gallery</nuxt-link>
        </div>
        <div class="header__nav__frame">
          <nuxt-link class="b-button" to="/">Contact Me</nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  padding: 25px 178px;
  justify-content: flex-start;

  &__title {
    width: 236px;
    font-style: normal;
    font-weight: 100;
    color: #000000;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 0.485em;
  }

  &__nav {
    /* オートレイアウト */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 100%;
    height: 89px;

    &__frame {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      gap: 10px;

      a {
        position: relative;
        display: inline-block;
        text-decoration: none;
      }
      a::after {
        position: absolute;
        bottom: -4px;
        left: 0;
        content: "";
        width: 100%;
        height: 1px;
        background: #333;
        transform: scale(0, 1);
        transform-origin: right top;
        transition: transform 0.3s;
      }
      a:hover::after {
        transform-origin: left top;
        transform: scale(1, 1);
      }
    }
  }
}
</style>
