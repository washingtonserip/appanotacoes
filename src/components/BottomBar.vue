<template lang="html">
    <div class="BottomBar">
        <new-note></new-note>
    </div>
</template>

<script type="text/babel">
    import NewNote from './NewNote';

    export default {
        components: {
            NewNote,
        },
    };
</script>

<style lang="stylus">
    .BottomBar
        bottom 0
        position fixed
        width 100%
</style>
