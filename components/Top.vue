<template>
    <section class="top-frame">
        <div class="img-frame">
            <img class="top-img" src ="../static/top-img.jpg"> 
        </div>
    </section>
</template>
  
<style>
.top-frame{
    /* Top */
    width: 100%;
    height: 80vh;
    /* オートレイアウト */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 179px;
    /* オートレイアウト内部 */
    flex: none;
    align-self: stretch;
    flex-grow: 0;

}

.img-frame{
    /* Frame 3 */
    width: auto;
    height: auto;

    /* オートレイアウト */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;


    /* テーマ色 */
    border-radius: 35px;

    /* オートレイアウト内部 */
    flex: none;
    align-self: stretch;
    flex-grow: 0;

    /*アニメーション設定*/
    animation-name: surfaceAnime;
    animation-fill-mode: both;
    animation-duration:2s;
    animation-iteration-count:forwards;
    animation-timing-function:ease-in;
}

@keyframes surfaceAnime {
    from{
        /*開始のCSS*/

    }

    to{
        /*終了のCSS*/
        /* テーマ色 */
        box-shadow: inset 7px 8px 20px rgba(0, 0, 0, 0.25), inset -8px -8px 27px #FFFFFF;
 
    }
}

.top-img{
    /* 85770109_p0 1 */
    width: 70vw;
    height: 70vh;
    object-fit: cover;

    border-radius: 35px;

    /* オートレイアウト内部 */
    flex: none;
    flex-grow: 0;   
}

  
</style>