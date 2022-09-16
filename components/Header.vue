<template>
  <header>
    <nav class="header">
      <div class="header-title" href="/">
        Kirota
      </div>
      <div class="header-nav" >
        <div class="nav-frame">
          <button class="b-button" onclick="location.href='/'">About</button>
        </div>
        <div class="nav-frame">
          <button class="b-button" href="#">gallery</button>
        </div>
        <div class="nav-frame">
          <button class="b-button" href="#">Contact Me</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.header{
  position: relative;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  padding: 25px 178px;
  justify-content: flex-start;
  
  .header-title{
    width: 236px;
    font-style: normal; 
    font-weight: 100; 
    color: #000000; 
    font-size: 48px; 
    line-height: 58px; 
    letter-spacing: 0.485em;
  }

  .header-nav{
    /* オートレイアウト */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 100%;
    height: 89px;

    .nav-frame{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      gap: 10px;
    }
  }
}


</style>