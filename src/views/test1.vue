<template>
    <div>
        <productCards
            :products="products"
        ></productCards>
    </div>
</template>

<script>

    import productCards from "./productCards";


    export default {
        name: "test1",
        components : {productCards},
        data(){
            return{
                products : [
                    {
                        id: 0,
                        name : 'digikala',
                        path : 'Digikala.svg',
                    },
                    {
                        id: 1,
                        name : 'digistyle',
                        path : 'digistyle.svg',
                    },
                    {
                        id: 2,
                        name : 'chareh',
                        path : 'chareh.png',
                    },
                    {
                        id: 3,
                        name : 'modiseh',
                        path : 'modiseh.svg',
                    },
                    {
                        id: 4,
                        name : 'ofogh',
                        path : 'ofogh.png',
                    },
                    {
                        id: 5,
                        name : 'snapmarket',
                        path : 'snapMarker.png',
                    },
                    {
                        id: 6,
                        name : 'digikala',
                        path : 'Digikala.svg',
                    },
                    {
                        id: 7,
                        name : 'digistyle',
                        path : 'digistyle.svg',
                    },
                    {
                        id: 8,
                        name : 'chareh',
                        path : 'chareh.png',
                    },
                    {
                        id: 9,
                        name : 'modiseh',
                        path : 'modiseh.svg',
                    },
                    {
                        id: 10,
                        name : 'ofogh',
                        path : 'ofogh.png',
                    },
                    {
                        id: 11,
                        name : 'snapmarket',
                        path : 'snapMarker.png',
                    },
                ]
            }
        }

    }
</script>

<style scoped>

</style>
