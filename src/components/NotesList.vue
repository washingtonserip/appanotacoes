<template lang="html">
    <div>
        <div class="Alert--default"
            v-show="alertText">
            <div class="General__Container">
                {{ alertText }}
            </div>
        </div>

        <div class="NotesList"
            v-bind:class="{ 'NotesList--largeHeight': editMode || favoritesOnly }">
            <div class="General__Container">
                <annotation v-for="annotation in annotationsList"
                    v-bind:annotation="annotation.doc"
                    v-on:EDIT_MODE="hiddenBottomBar"
                    v-on:DELETE_ANNOTATION="deleteAnnotation"
                    v-on:EDIT_ANNOTATION="editAnnotation"></annotation>

                <div class="General__Content--alignCenter"
                    v-show="(!annotationsList || !annotationsList[0]) && favoritesOnly">
                    <p>
                        Nenhuma anotação foi encontrada.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import PouchDB from 'pouchdb';

    import Annotation from './Annotation';

    export default {
        props: {
            syncData: {
                type: Boolean,
                default() {
                    return false;
                },
            },
            favoritesOnly: {
                type: Boolean,
                default() {
                    return false;
                },
            },
            search: {
                type: String,
                default() {
                    return '';
                },
            },
        },
        data() {
            return {
                alertText: '',
                allAnnotations: [],
                editMode: false,
                defaultAnnotation: 'Crie, edite e favorite suas anotações.',
            };
        },
        components: {
            Annotation,
        },
        computed: {
            db() {
                return new PouchDB('appanotacoes');
            },
            annotationsList() {
                if (this.search) {
                    const searchRE = new RegExp(this.search.toLowerCase(), 'g');

                    return this.allAnnotations.filter((item) => {
                        const itemText = item.doc.text.toLowerCase();

                        return itemText.match(searchRE);
                    });
                } else if (this.favoritesOnly) {
                    return this.allAnnotations.filter(item => item.doc.favorite);
                }

                return this.allAnnotations;
            },
        },
        watch: {
            syncData() {
                this.$emit('SYNC_DATA', false);
                this.listNotes();
            },
        },
        methods: {
            alert(text) {
                this.alertText = text;

                setTimeout(() => {
                    this.alertText = '';
                }, 4000);
            },
            checkAllAnnotations() {
                if (!this.allAnnotations || !this.allAnnotations[0]) {
                    const annotation = {
                        _id: new Date().toISOString(),
                        favorite: false,
                        text: this.defaultAnnotation,
                    };

                    this.db.put(annotation,
                        (err) => {
                            if (!err) {
                                this.listNotes();
                            }
                        },
                    );
                }
            },
            listNotes() {
                this.db.allDocs(
                    {
                        include_docs: true,
                        descending: true,
                    },
                    (err, doc) => {
                        this.allAnnotations = doc.rows;
                        this.checkAllAnnotations();
                    },
                );
            },
            deleteAnnotation(annotation) {
                this.db.remove(annotation);
                this.listNotes();
                this.alert('Anotação deletada com sucesso.');
            },
            editAnnotation(annotation) {
                this.db.put(annotation);
                this.listNotes();
                this.alert('Anotação alterada com sucesso.');
            },
            hiddenBottomBar(status) {
                this.editMode = status;
                this.$emit('HIDDEN_BOTTOM_BAR', status);
            },
        },
        mounted() {
            this.listNotes();
        },
    };
</script>

<style lang="stylus">
    ::-webkit-scrollbar
        width 2px

    ::-webkit-scrollbar-track
        background rgba(221,221,221,1)

    ::-webkit-scrollbar-thumb
        background rgba(65,130,214,1)

    ::-webkit-scrollbar-thumb:window-inactive
    	background rgba(221,221,221,1)

    .NotesList
        height 69.959vh // 62.668vh
        padding 15px 0 10px
        overflow auto

        &--largeHeight
            height 81.3vh
</style>
