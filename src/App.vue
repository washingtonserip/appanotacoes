<template>
    <div id="app">
        <app-header></app-header>

        <search-bar></search-bar>

        <notes-list></notes-list>

        <bottom-bar></bottom-bar>
    </div>
</template>

<script type="text/babel">
    import AppHeader from './components/AppHeader';
    import SearchBar from './components/SearchBar';
    import NotesList from './components/NotesList';
    import BottomBar from './components/BottomBar';

    export default {
        components: {
            AppHeader,
            SearchBar,
            NotesList,
            BottomBar,
        },
    };
</script>

<style lang="stylus">
    @import "assets/stylus/app"
</style>
