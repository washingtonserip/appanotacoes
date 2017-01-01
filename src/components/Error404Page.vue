<template lang="html">
    <div class="FavoritesPage">
        <app-header page-title="Erro 404"></app-header>

        <search-bar></search-bar>

        <div class="General__Container">
            <div class="General__Content--error404">
                <p>
                    Você está perdido. Volte para o <router-link to="/">início</router-link>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from './AppHeader';
    import SearchBar from './SearchBar';

    export default {
        components: {
            AppHeader,
            SearchBar,
        },
    };
</script>
