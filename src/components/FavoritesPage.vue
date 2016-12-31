<template lang="html">
    <div class="FavoritesPage">
        <app-header page-title="Anotações Favoritas"></app-header>

        <search-bar></search-bar>
    </div>
</template>

<script>
    import AppHeader from './AppHeader';
    import SearchBar from './SearchBar';

    export default {
        data() {
            return {
            };
        },
        components: {
            AppHeader,
            SearchBar,
        },
        methods: {
        },
    };
</script>

<style lang="stylus">
</style>
