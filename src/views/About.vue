<template>
    <div class="about">
        <select name="lang" id="selectLang" :change="changeLang" v-model="lang">
            <option value="fa">فارسی</option>
            <option value="en">English</option>
        </select>
        <h1>{{ $t() }}</h1>
<!--        <h1>This is an about page</h1>-->
    </div>
</template>


<script>
    export default {
        data() {
            return {
                langs: ['Persian', 'English'],
                lang: 'en'
            }
        },

        methods: {
            changeLang: function () {
                if (this.lang === 'fa') {
                    this.$i18n.locale = 'fa';
                    this.$vuetify.rtl = true;
                    this.$store.state.lang = 'fa';
                    console.log("fa change")
                }
                if (this.lang === 'en') {
                    this.$i18n.locale = 'en';
                    this.$vuetify.rtl = false;
                    this.$store.state.lang = 'en';
                    console.log("en change")
                }
            }
        }
    }
</script>

<style scoped>
    #selectLang {
        height: 30px;
        width: 100px;
        display: inline;
    }
</style>
