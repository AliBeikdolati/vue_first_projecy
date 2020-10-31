<template>
    <div class="container productBox">
        <i @click="scrollLeft" :style="'transform : translate3d(${cardsX}px,0,0)'" class="material-icons slideButton left">chevron_left</i>
        <transition name="slide" mode="out-in">
            <div class="products" id="products">
                <card v-for="(card , index) in products"
                      :key="index"
                      :id="card.id"
                      :name = "card.name"
                      :path = "card.path"
                >
                </card>
            </div>
        </transition>

        <i @click="scrollRight" class="material-icons slideButton right">chevron_right</i>
    </div>
</template>

<script>

    import card from './card.vue';


    export default {
        name: "productCards",
        components : {card},
        props : ['products'],

        data(){
            return{
                i : 0,
                delay : 0,
                cardWidth : 0,
            }
        },

        methods : {
            scrollLeft(){
                let content = document.querySelector('.products');
                // content.scrollLeft -= document.getElementById('card').offsetWidth * 2;
                this.cardWidth = document.getElementById('card').offsetWidth * 1.25;
                this.delay = 0;
                for (this.i = 0 ; this.i <= this.cardWidth ; this.i++){
                    this.delay = this.delay == 0 ? 1000 : this.delay;
                    setTimeout(function () {
                        content.scrollLeft--;
                    }, this.delay);
                    this.delay -= 1;
                }
            },

            scrollRight(){
                let content = document.querySelector('.products');
                // content.scrollLeft += document.getElementById('card').offsetWidth * 2;
                this.cardWidth = document.getElementById('card').offsetWidth * 1.25 * 2;
                this.delay = 0;
                for (this.i = 0 ; this.i <= this.cardWidth ; this.i++){
                    this.delay = this.delay == 0 ? 1000 : this.delay;
                    setTimeout(function () {
                        content.scrollLeft++;
                    }, this.delay);
                    this.delay -= 1;
                }
            }
        }
    }
</script>

<style scoped>

    div.productBox{

    }
    div.productBox i.slideButton{
        border-radius: 20px;
        background-color: #ffffffe0;
        width: 40px;
        height: 40px;
        vertical-align: middle;
        padding-top: 7px;
        cursor: pointer;
        box-shadow: 0 0 4px black;
    }
    div.productBox i.slideButton:hover{
        background-color: #cdcdcde0;
    }
    div.productBox i.right{
        float: right;
        position: relative;
        bottom: 115px;
        right: 6px;
    }
    div.productBox i.left{
        float: left;
        position: relative;
        top: 85px;
        left: 46px;
        z-index: 1;
    }
    div.productBox div.products{
        height: 200px;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        margin: 0;
        -webkit-overflow-scrolling: touch;
        -webkit-transition-delay: 5s;

    }

    div i{
        /*float: left;*/
    }

    ::-webkit-scrollbar {
        display: none;
    }


    .slide-enter-active, .slide-leave-active {
        transition: opacity 3s;
    }
    .slide-enter, .slide-leave-to {
        opacity: 0;
    }


</style>
