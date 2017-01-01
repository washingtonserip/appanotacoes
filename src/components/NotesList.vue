<template lang="html">
    <div>
        <div class="Alert--default"
            v-show="alertText">
            <div class="General__Container">
                {{ alertText }}
            </div>
        </div>

        <div class="NotesList"
            v-bind:class="{ 'NotesList--largeHeight': editMode }">
            <div class="General__Container">
                <annotation v-for="annotation in allAnnotations"
                    v-bind:annotation="annotation.doc"
                    v-on:EDIT_MODE="hiddenBottomBar"
                    v-on:DELETE_ANNOTATION="deleteAnnotation"
                    v-on:EDIT_ANNOTATION="editAnnotation"></annotation>
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
        },
        data() {
            return {
                alertText: '',
                allAnnotations: [],
                editMode: false,
            };
        },
        components: {
            Annotation,
        },
        computed: {
            db() {
                return new PouchDB('appanotacoes');
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
            listNotes() {
                this.db.allDocs(
                    {
                        include_docs: true,
                        descending: true,
                    },
                    (err, doc) => {
                        this.allAnnotations = doc.rows;
                    }
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
        height 62.668vh
        padding 15px 0 10px
        overflow auto

        &--largeHeight
            height 81.3vh
</style>
