<template lang="html">
    <div class="NoticeModal"
        v-show="open">
        <div class="NoticeModal__Mask"></div>

        <div class="NoticeModal__Box">
            <div class="NoticeModal__Text">
                Este site é apenas uma demonstração do projeto <a href="https://github.com/washingtonbr/appanotacoes" target="_blank">App Anotações</a> <i>(Ainda em desenvolvimento)</i>.
            </div>

            <button type="button"
                class="NoticeModal__Btn"
                v-on:click="closeModal">ok</button>
        </div>
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
            closeModal() {
                this.$emit('CLOSE_MODAL', false);
            },
        },
    };
</script>

<style lang="stylus">
    .NoticeModal
        position absolute
        width 100%
        font-size 1rem

    +prefix-classes("NoticeModal")
        .__Mask
            background-color rgba(0,0,0,0.76)
            position fixed
            top 0
            left 0
            height 100vh
            width 100vw
            z-index 8

        .__Box
            background-color rgba(255,255,255,1)
            position fixed
            margin -54px 0 0 -155px
            width 310px
            padding 20px 15px
            left 50%
            top 50%
            text-align center
            z-index 9

        .__Text
            margin-bottom 12px
            line-height 1.5rem

            a
                color rgb(51,51,51)
                text-decoration underline

        .__Btn
            background-color rgba(50,99,163,1)
            border none
            color rgb(255,255,255)
            cursor pointer
            padding 5px
</style>
