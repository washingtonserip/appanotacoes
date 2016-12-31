<template>
    <div id="app">
        <initial-notice v-bind:open="initialNoticeStatus"
            v-on:CLOSE_MODAL="changeInitialNoticeStatus"></initial-notice>

        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    import InitialNotice from './components/InitialNotice';

    export default {
        data() {
            return {
                initialNoticeStatus: true,
            };
        },
        components: {
            InitialNotice,
        },
        methods: {
            changeInitialNoticeStatus(status) {
                this.initialNoticeStatus = status;
            },
        },
    };
</script>

<style lang="stylus">
    @import "assets/stylus/app"
</style>
