<template>
    <div id="app">
        <app-header></app-header>

        <search-bar></search-bar>

        <bottom-bar></bottom-bar>
    </div>
</template>

<script type="text/babel">
    import AppHeader from './components/AppHeader';
    import SearchBar from './components/SearchBar';
    import BottomBar from './components/BottomBar';

    export default {
        components: {
            AppHeader,
            SearchBar,
            BottomBar,
        },
    };
</script>

<style lang="stylus">
    @import "assets/stylus/app"
</style>
