<template lang="html">
    <div class="NotificationBar">
        <div class="General__Container">
            <a href="#"
                class="NotificationBar__Text">
                Guia rápido de uso do App Anotações e mais.
            </a>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        mounted() {
        },
    };
</script>

<style lang="stylus">
    .NotificationBar
        background-color rgba(50,99,163,1)

        & .General__Container
            height 7.291vh
            min-height 7.291vh

    +prefix-classes("NotificationBar")
        .__Text
            background-color transparent
            background-image url("../assets/svg/plus.svg")
            background-size 1.166rem
            background-repeat no-repeat
            background-position left calc(3.645vh - 0.560rem)
            color rgb(255,255,255)
            display block
            height 7.291vh
            line-height 7.291vh
            text-decoration none
            padding-left 1.666rem
            width 100%
</style>
