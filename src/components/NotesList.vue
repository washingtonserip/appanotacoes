<template lang="html">
    <div class="NotesList">
        <div class="General__Container">
            <annotation v-for="annotation in annotations"
                v-bind:annotation="annotation.doc"></annotation>
        </div>
    </div>
</template>

<script type="text/babel">
    import Annotation from './Annotation';

    export default {
        props: {
            annotations: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
        components: {
            Annotation,
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
