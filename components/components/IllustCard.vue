<template>
    <div class="illustCard drop-shadow">
        <div class="illustCard__image">
            <img src="~/static/top-img.jpg"/>
        </div>
        <div class="illustCard__description">
            <div class="illustCard__description--modifier">
                <div class="illustCard__description--modifier__title">
                    title
                </div>
                <div class="illustCard__description--modifier__description">
                    制作時間{{makingTime}}:制作期間{{making}}</br>
                    {{makeDate}}
                </div>
            </div>
            <div class="b-button illiustCard__description--social">
                <img src="~/static/favorite_icon.svg"/>
                <div class="count">18</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        props:{
            makingTime:{
                type: Number,
                default: 0,
                required: true
            }
        }
    })
</script>


<style lang="scss" scoped>
.illustCard{
    /* illustration Tile */
    /* オートレイアウト */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    gap: 10px;

    width: 733px;
    height: 488px;
    &__image{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
        img{
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 35px;
        }
    }
    &__description{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 36px;
        gap: 10px;

        width: 673px;
        height: 69px;
        &--modifier{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px 50px;
            gap: 10px;
            width: 478px;
            height: 53px;
            &__title{
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 29px;
                /* ボックスの高さと同一 */
                text-align: center;    
            }
            &__description{
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                text-align: right;
                color: #7B7B7B;
                width: 100%;
            }
        }
        .b-button{
            /* オートレイアウト */
            display: flex;
            align-items: center;
            justify-self: center;
            padding: 10px 30px;
            gap: 10px;

            img{
                padding: 5px 4px;
                gap: 10px;

                width: 25px;
                height: 25.58px;
            }
            .count{
                width: 22px;
                height: 24px;

                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                text-align: center;

                color: #7B7B7B;
            }
            
        }
    }
}

</style>