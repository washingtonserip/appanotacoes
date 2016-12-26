<template lang="html">
    <div class="SearchBar">
        <div class="General__Container">
            <div class="SearchBar__Box">
                <input type="text"
                    class="SearchBar__Field"
                    name="search"
                    placeholder="Pesquise por notas...">

                <button type="button"
                    class="SearchBar__Btn"
                    name="button">Pesquisar</button>
            </div>
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
    @import "../assets/stylus/mixins"

    .SearchBar
        background-color rgba(65,130,214,1)
        font-family "Open Sans", sans-serif

        & .General__Container
            padding-top 1.458vh
            padding-bottom 1.458vh

    +prefix-classes("SearchBar")
        .__Box
            background-color rgba(255,255,255,1)
            height 6.459vh
            min-height 35px

        .__Field
            border none
            height 6.459vh
            min-height 35px
            width 90%
            width calc(100% - (2rem + 4%))
            padding-left 2%

        .__Btn
            background-color transparent
            background-image url("../assets/svg/search.svg")
            background-size 1.166rem
            background-repeat no-repeat
            background-position center
            border none
            cursor pointer
            height 6.459vh
            min-height 35px
            text-indent -9999px
            padding 0 2%
            width calc(1.6rem + 4%)
</style>
