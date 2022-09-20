<template>
    <section class="about-section">
        <SectionTitle :title="aboutTitle"/>
        <div class="about-content">
            <div class="about-contnt-image-frame">
                <img class="about-contnt-image" src ="~/static/top-img.jpg"> 
            </div>
            <div class="self-introduction-frame">
                <div class="self-introduction-description-name-frame">
                    <div class="self-introduction-name-yomigana">
                        shirotsuki kirota
                    </div>
                    <div class="self-introduction-name">
                        白月　きろた
                    </div>
                </div>
                <div class="self-introduction-description-frame">
                    <p class="self-introduction-description">
                        ここはあとから決めますー
                    </p>
                </div>
                <div class="social-icons">
                    <div class="social-icons__frame">
                        <a href="https://twitter.com/KiroTuki" class="social-icons__frame--modifier">
                            <img src="~/static/social_icons/twitter.svg"/>
                        </a>
                    </div>
                    <div class="social-icons__frame">
                        <a href="https://twitter.com/KiroTuki" class="social-icons__frame--modifier">
                            <img src="~/static/social_icons/twitter.svg"/>
                        </a>
                    </div>
                    <div class="social-icons__frame">
                        <a href="https://twitter.com/KiroTuki" class="social-icons__frame--modifier">
                            <img src="~/static/social_icons/twitter.svg"/>
                        </a>
                    </div>
                    <div class="social-icons__frame">
                        <a href="https://twitter.com/KiroTuki" class="social-icons__frame--modifier">
                            <img src="~/static/social_icons/twitter.svg"/>
                        </a>
                    </div>
                </div>
                <div class="sit-image">
                    <div class="sit-image__frame">
                        <img src="~/static/20220908.png" class="sit-image__frame--modifier">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import SectionTitle from "~/components/components/SectionTitle.vue";
    
    export default Vue.extend({
        components:{SectionTitle},
        data(){
            return{
                aboutTitle: 'About'
            }
        }
    })
</script>
  
<style lang="scss">
$breakpoint-tablet: 1050px;
$breakpoint-mobile: 665px;

// 画面幅955以下になるとこの設定が適用される
@mixin tablet{
  @media only screen and (max-width: ($breakpoint-tablet)) {
    @content;
  }
}
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
    align-self: stretch;
    flex-grow: 0;

    .about-content{
        /* Frame 21 */
        /* オートレイアウト */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 15vw;
        gap: 31px;
        height: auto;
        /* オートレイアウト内部 */
        align-self: stretch;

        @include tablet{
            display: block;
            padding: 0px 10vw;
        }
  
        .about-contnt-image-frame{
            /* Frame 14 */
            /* オートレイアウト */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px 22px;
            margin: 30px 0;
            gap: 10px;

            width: 100vw;
            height: 70vh;
            /* テーマ色 */
            box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(255, 255, 255, 0.5);
            border-radius: 35px;
        @include tablet{
            width: auto;
        }
            
            .about-contnt-image{
                width: 100%;
                height: 68vh;
                object-fit: cover;
                border-radius: 35px;
                @include tablet{
                    width: 100%;
                }
            }

        }

        .self-introduction-frame{
            /* Frame 19 */
            /* オートレイアウト */
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 52px 10px;
            margin: 30px 0;
            gap: 10px;
            
            position: relative;
            width: 100vw;
            height: 70vh;

            box-shadow: inset 4px 4px 3px rgba(0, 0, 0, 0.25), inset -4px -4px 4px rgba(255, 255, 255, 0.5);
            border-radius: 35px;

            @include tablet{
                width: auto;
            }

            .self-introduction-description-name-frame {
                /* Frame 22 */
                /* オートレイアウト */
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px;
                gap: 10px;
                width: 100%;
                height: 137px;

                font-style: normal;
                font-weight: 400;

                /* オートレイアウト内部 */
                align-self: stretch;
                .self-introduction-name-yomigana{
                    font-size: 24px;
                    line-height: 29px;
                    /* ボックスの高さと同一 */
                    text-align: center;
                    color: #676767;
                    
                    /* オートレイアウト内部 */
                    align-self: stretch;
                }
                .self-introduction-name{
                        font-size: 40px;
                        line-height: 48px;
                        text-align: center;
                        color: #000000;

                        /* オートレイアウト内部 */
                        align-self: stretch;
                }
            }

            .social-icons{
                /* オートレイアウト */
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0px;
                gap: 26px;

                width: 100%;
                height: 62px;

                &__frame{
                    /* オートレイアウト */
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 0px;
                    gap: 10px;
                    

                    width: 63px;
                    height: 62px;
                    /* Drop Shadow */
                    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(255, 255, 255, 0.5);
                    border-radius: 121px;
                    &:hover{
                            box-shadow: inset 7px 8px 20px rgba(0, 0, 0, 0.25), inset -8px -8px 27px #FFFFFF;
                        }
                    &--modifier{
                        width: 60%;


                    }
                }
            }
            .sit-image{
                /* オートレイアウト */
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0px 103px 12px;
                gap: 10px;
                position: absolute;
                bottom: -300px;

                height: auto;
                &__frame{
                    img{
                        width: auto;
                        height: 600px;
                    }                 
                }
            }
        }
    }
}

</style>