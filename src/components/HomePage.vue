<template lang="html">
    <div class="HomePage">
        <app-header v-bind:page-active="pageActive"></app-header>

        <search-bar></search-bar>

        <notes-list v-bind:sync-data="syncData"
            v-on:SYNC_DATA="syncData = false"
            v-on:HIDDEN_BOTTOM_BAR="bottomBarModify"></notes-list>

        <div class="BottomBar"
            v-show="!hiddenBottomBar">
            <!-- <notification-bar></notification-bar> -->

            <new-note v-on:SYNC_DATA="syncData = true"></new-note>
        </div>
    </div>
</template>

<script>
    import AppHeader from './AppHeader';
    import SearchBar from './SearchBar';
    import NotesList from './NotesList';
    import NotificationBar from './NotificationBar';
    import NewNote from './NewNote';

    export default {
        data() {
            return {
                syncData: false,
                hiddenBottomBar: false,
                pageActive: 'home',
            };
        },
        components: {
            AppHeader,
            SearchBar,
            NotesList,
            NotificationBar,
            NewNote,
        },
        methods: {
            bottomBarModify(status) {
                this.hiddenBottomBar = status;
            },
        },
    };
</script>

<style lang="stylus">
    .BottomBar
        bottom 0
        position fixed
        width 100%
</style>
