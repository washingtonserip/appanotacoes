<template lang="html">
    <div class="MainMenu" v-show="open">
        <div class="MainMenu__Mask"
            v-on:click="closeMenu"></div>

        <ul class="MainMenu__Sidebar">
            <li class="MainMenu__Sidebar--active"><a href="#">Todas as Anotações</a></li>
            <li><a href="#">Favoritos</a></li>
            <li><a href="#">Lixeira</a></li>
            <li><a href="#">Configurações</a></li>
            <li><a href="#">Guia de Uso</a></li>
            <li><a href="#">Sobre o APP</a></li>
        </ul>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            open: {
                type: Boolean,
                default() {
                    return false;
                },
            },
        },
        methods: {
            closeMenu() {
                this.$emit('CLOSE_MENU', false);
            },
        },
    };
</script>

<style lang="stylus">
    .MainMenu
        position absolute
        color rgb(255,255,255)

    +prefix-classes("MainMenu")
        .__Mask
            background-color rgba(0,0,0,0.76)
            position absolute
            top 0
            left 0
            height 100vh
            width 100vw
            z-index 8

        ul.__Sidebar
            background-color rgba(50,99,163,1)
            height 100vh
            position relative
            width 200px
            z-index 9

            &>li
                border-bottom 1px solid rgb(65,130,214)

                &>a
                    color rgb(255,255,255)
                    display block
                    font-size 1.083rem
                    height 40px
                    line-height 40px
                    padding-left 15px
                    width 100%
                    text-decoration none

                &.__Sidebar--active
                    background-color rgba(65,130,214,1)
</style>
