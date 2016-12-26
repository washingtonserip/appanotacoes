<template>
    <div id="app">
        <app-header></app-header>
        
        <search-bar></search-bar>
    </div>
</template>

<script type="text/babel">
    import AppHeader from './components/AppHeader';
    import SearchBar from './components/SearchBar';

    export default {
        components: {
            AppHeader,
            SearchBar,
        },
    };
</script>

<style lang="stylus">
    @import "assets/stylus/app"
</style>
