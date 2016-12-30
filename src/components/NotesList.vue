<template lang="html">
    <div class="NotesList">
        <div class="General__Container">
            <annotation v-for="n in 8"></annotation>
        </div>
    </div>
</template>

<script type="text/babel">
    import Annotation from './Annotation';

    export default {
        components: {
            Annotation,
        },
        mounted() {
        },
    };
</script>

<style lang="stylus">
    ::-webkit-scrollbar
        width 2px

    ::-webkit-scrollbar-track
        background rgba(221,221,221,1)

    ::-webkit-scrollbar-thumb
        background rgba(65,130,214,1)

    ::-webkit-scrollbar-thumb:window-inactive
    	background rgba(221,221,221,1)

    .NotesList
        height 62.668vh
        padding 15px 0 10px
        overflow auto
</style>
