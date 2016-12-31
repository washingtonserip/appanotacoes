<template>
    <div id="app">
        <initial-notice v-bind:open="initialNoticeStatus"
            v-on:CLOSE_MODAL="changeInitialNoticeStatus"></initial-notice>

        <app-header></app-header>

        <search-bar></search-bar>

        <notes-list></notes-list>

        <bottom-bar></bottom-bar>
    </div>
</template>

<script type="text/babel">
    import InitialNotice from './components/InitialNotice';
    import AppHeader from './components/AppHeader';
    import SearchBar from './components/SearchBar';
    import NotesList from './components/NotesList';
    import BottomBar from './components/BottomBar';

    export default {
        data() {
            return {
                initialNoticeStatus: true,
            };
        },
        components: {
            InitialNotice,
            AppHeader,
            SearchBar,
            NotesList,
            BottomBar,
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
