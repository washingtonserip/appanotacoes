<template lang="html">
    <div class="FavoritesPage">
        <app-header page-title="Anotações Favoritas"
            v-bind:page-active="pageActive"></app-header>

        <search-bar></search-bar>

        <notes-list v-bind:favorites-only="true"></notes-list>
    </div>
</template>

<script>
    import AppHeader from './AppHeader';
    import SearchBar from './SearchBar';
    import NotesList from './NotesList';

    export default {
        data() {
            return {
                pageActive: 'favorites',
            };
        },
        components: {
            AppHeader,
            SearchBar,
            NotesList,
        },
        methods: {
        },
    };
</script>

<style lang="stylus">
</style>
