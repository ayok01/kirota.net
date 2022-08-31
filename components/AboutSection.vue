<template>
    <div class="about-section">
        <div class="title-frame">
            <div class="about-title">About</div>
        </div>
        <div class="about-content">
            <div class="about-contnt-image-frame">
                <img class="" src ="../static/top-img.jpg"> 
            </div>
            <div class="about-content-frame">
                <div class="title-name-frame">
                    <div class="title-yomigana">
                        shirotsuki kirota
                    </div>
                    <div class="title-name">
                        白月　きろた
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style>
.about-section{
    /* Frame 20 */


/* オートレイアウト */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 83px 0px;
gap: 31px;

width: 100%;
height: auto;


/* オートレイアウト内部 */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
}

.title-frame{
    /* Frame 27 */


/* オートレイアウト */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 24px 70px;
gap: 10px;

width: 100%;
height: auto;

/* オートレイアウト内部 */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}

.about-title{
    /* About */


width: 109px;
height: 48px;

font-family: 'Inter';
font-style: normal;
font-weight: 100;
font-size: 40px;
line-height: 48px;

color: #000000;


/* オートレイアウト内部 */

flex: none;
order: 0;
flex-grow: 0;
}

.about-contnt{
    /* Frame 21 */


/* オートレイアウト */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 476px;
gap: 31px;

width: 1920px;
height: 644px;


/* オートレイアウト内部 */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
</style>