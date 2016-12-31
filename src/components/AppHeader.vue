<template>
    <div>
        <main-menu v-bind:open="menuStatus"
            v-on:CLOSE_MENU="changeMenuStatus"></main-menu>

        <div class="AppHeader">
            <div class="General__Container AppHeader__Flexbox">
                <div class="AppHeader__Icon--menu AppHeader__FlexboxItem"
                    v-on:click="menuStatus = true"></div>

                <div class="AppHeader__Title AppHeader__FlexboxItem">
                    {{ pageTitle }}
                </div>

                <router-link to="/favorites"
                    class="AppHeader__Icon--bookmarks AppHeader__FlexboxItem"></router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import MainMenu from './MainMenu';

    export default {
        props: {
            pageTitle: {
                type: String,
                default() {
                    return 'appAnotacoes.com.br';
                },
            },
        },
        data() {
            return {
                menuStatus: false,
            };
        },
        components: {
            MainMenu,
        },
        methods: {
            changeMenuStatus(status) {
                this.menuStatus = status;
            },
        },
    };
</script>

<style lang="stylus">
    @import "../assets/stylus/mixins"

    .AppHeader
        background-color rgba(50,99,163,1)
        text-align center

        & .General__Container
            height 9.375vh
            min-height 45px

    +prefix-classes("AppHeader")
        .__Flexbox
            flex-display()
            flex-direction(row)
            flex-wrap(wrap)
            flex-align-items(center)
            align-content stretch
            -ms-flex-line-pack stretch
            -webkit-align-content stretch
            -ms-flex-pack justify
            justify-content space-between
            -webkit-justify-content space-between

        .__FlexboxItem
            flex-order(0)
            flex-item(0 1 auto)
            align-self auto
            -webkit-align-self auto
            -ms-flex-item-align auto

        .__Icon
            cursor pointer
            height 1.833rem
            width 1.833rem
            background-size 1.833rem

            &--menu
                @extend .AppHeader__Icon
                background-image url("../assets/svg/menu.svg")

            &--bookmarks
                @extend .AppHeader__Icon
                background-image url("../assets/svg/bookmarks.svg")

        .__Title
            color rgb(255,255,255)
            font-size 1.416rem
</style>
