<template lang="html">
    <div class="BottomBar">
        <notification-bar></notification-bar>

        <new-note></new-note>
    </div>
</template>

<script type="text/babel">
    import NotificationBar from './NotificationBar';
    import NewNote from './NewNote';

    export default {
        components: {
            NotificationBar,
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
