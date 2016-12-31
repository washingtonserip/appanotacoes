<template lang="html">
    <div class="Annotation">
        <div class="Annotation__Text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div class="Annotation__Options">
            <button class="Annotation__OptionsBtn--favorite"></button>
            <button class="Annotation__OptionsBtn--edit"></button>
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
    .Annotation
        background-color rgba(65,130,214,1)
        border 1px solid rgba(65,130,214,1)
        overflow hidden
        margin-bottom 10px

    +prefix-classes("Annotation")
        .__Text
            background-color rgba(255,255,255,1)
            color #333
            float left
            font-size 1.3rem
            min-height 70px
            overflow auto
            line-height 2.2rem
            padding 12px 15px 14px
            width calc(100% - 36px)

            &--big
                @extend .Annotation__Text
                font-size 1.7rem
                line-height 1.9rem

        .__Options
            float right
            height 70px
            padding 5px 0
            width 36px

        .__OptionsBtn
            background-color transparent
            background-size 1.2rem
            background-repeat no-repeat
            background-position center
            border none
            cursor pointer
            height 30px
            width 36px

            &--favorite
                @extend .Annotation__OptionsBtn
                background-image url("../assets/svg/star.svg")

            &--edit
                @extend .Annotation__OptionsBtn
                background-image url("../assets/svg/edit.svg")
</style>
