<template lang="html">
    <div class="HomePage">
        <div class="Alert--default"
            v-show="alertText">
            {{ alertText }}
        </div>

        <app-header></app-header>

        <search-bar></search-bar>

        <notes-list v-bind:annotations="allAnnotations"></notes-list>

        <div class="BottomBar">
            <notification-bar></notification-bar>

            <new-note v-on:SAVE_ANNOTATION="saveAnnotation"></new-note>
        </div>
    </div>
</template>

<script>
    import PouchDB from 'pouchdb';

    import AppHeader from './AppHeader';
    import SearchBar from './SearchBar';
    import NotesList from './NotesList';
    import NotificationBar from './NotificationBar';
    import NewNote from './NewNote';

    export default {
        data() {
            return {
                allAnnotations: [],
                alertText: '',
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
            listNotes() {
                const db = new PouchDB('appanotacoes');

                db.allDocs(
                    {
                        include_docs: true,
                        descending: true,
                    },
                    (err, doc) => {
                        this.allAnnotations = doc.rows;
                    }
                );
            },
            saveAnnotation(text) {
                const annotation = {
                    _id: new Date().toISOString(),
                    favorite: false,
                    text,
                };

                const db = new PouchDB('appanotacoes');

                db.put(annotation, (err) => {
                    if (!err) {
                        this.listNotes();

                        this.alertText = 'Anotação salva com sucesso.';

                        setTimeout(() => {
                            this.alertText = '';
                        }, 4000);
                    }
                });
            },
        },
        mounted() {
            this.listNotes();
        },
    };
</script>

<style lang="stylus">
    .BottomBar
        bottom 0
        position fixed
        width 100%
</style>
