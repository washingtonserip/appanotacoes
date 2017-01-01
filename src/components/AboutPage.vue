<template lang="html">
    <div class="FavoritesPage">
        <app-header page-title="Sobre o App"
            v-bind:page-active="pageActive"></app-header>

        <div class="General__Container">
            <div class="General__Content--margin">
                <p>
                    O AppAnotações é um projeto open-source, disponivel no <a href="https://github.com/washingtonbr/appanotacoes" target="_blank">Github</a>.
                </p>

                <p>
                    O site <b>AppAnotacoes.com.br</b> é apenas uma demostração do projeto e é hospedado no Github Pages.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from './AppHeader';

    export default {
        data() {
            return {
                pageActive: 'about',
            };
        },
        components: {
            AppHeader,
        },
    };
</script>
