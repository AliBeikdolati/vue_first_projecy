<template>
        <div id="card">
            <div id="img">
                <img :src="require('../assets/' + path)" :alt="name">
                <h2>{{ id }}. {{ name }}</h2>
            </div>
        </div>
</template>

<script>
    export default {
        name: "card",
        props : [
            'name',
            'path',
            'id',
        ],
        methods : {

        }
    }
</script>

<style scoped>


    div#card{
        display: inline-block;
        border: 0px;
        width: 22%;
        height: 100%;
        padding: 5px;
        cursor: pointer;

        -webkit-transition: transform 5s;
    }
    div#card div#img{
        padding: 5px;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 5px #c3c3c3;
        border-radius: 10px;

    }
    div#card div#img:hover{
        background-color: #fafafae6;
    }
    div#card div#img img{
        width: 100%;
        height: 80%;
    }
    div#card div#img h2{
        font-size: 20px;
    }


    @media screen and (max-width: 990px) and (min-width: 500px){
        div#card{
            width: 30%;
            height: 100%;
        }

        div#card div#img h2{
            font-size: 17px;
        }
    }
    @media screen and (max-width: 500px) and (min-width: 340px){
        div#card{
            width: 48%;
            height: 100%;
        }

        div#card div#img h2{
            font-size: 17px;
        }
    }
    @media screen and (max-width: 340px){
        div#card{
            width: 55%;
            height: 100%;
        }

        div#card div#img h2{
            font-size: 15px;
        }
    }

</style>
