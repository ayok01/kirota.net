<template>
  <div>
    <b-navbar class="header" toggleable="lg" type="white" style="background-color: $primery;">
      <b-navbar-brand class="header-title" href="/">
        Kirota
      </b-navbar-brand>
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
    </b-navbar>
  </div>
</template>

<style>
.nav-frame{
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
gap: 10px;
}


.header{
  padding: 25px 178px;
}
.header-title{
  height: 58px; 
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
  gap: 30px;
  width: 100%;
  height: 89px;
}

</style>