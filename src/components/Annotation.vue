<template lang="html">
    <div class="Annotation"
        v-bind:class="{ 'Annotation__Active': editMode }"
        v-show="annotation">
        <textarea class="Annotation__Textarea"
            ref="annotationTextarea"
            v-model="annotation.text"
            v-bind:style="{ height: annotationHeight }"
            v-show="editMode"></textarea>

        <div class="Annotation__Text"
            ref="annotationText"
            v-show="!editMode">
            {{ annotation.text }}
        </div>

        <div class="Annotation__Options">
            <button class="Annotation__OptionsBtn--favorite"
                v-show="!editMode && !annotation.favorite"
                v-on:click="favoriteAnnotation"></button>
            <button class="Annotation__OptionsBtn--favoriteActive"
                v-show="!editMode && annotation.favorite"
                v-on:click="favoriteAnnotation"></button>
            <button class="Annotation__OptionsBtn--edit"
                v-show="!editMode"
                v-on:click="editMode = true"></button>

            <button class="Annotation__OptionsBtn--delete"
                v-show="editMode"
                v-on:click="modalExclusion"></button>
            <button class="Annotation__OptionsBtn--check"
                v-show="editMode"
                v-on:click="editAnnotation"></button>
        </div>

        <div class="ConfirmationMode"
            v-show="modalExclusionStatus">
            <div class="NoticeModal__Mask"></div>

            <div class="NoticeModal__Box">
                <div class="NoticeModal__Text">
                    Você está prestes a excluir uma nota,<br /> deseja continar?
                </div>

                <button type="button"
                    class="NoticeModal__Btn--secondary"
                    v-on:click="modalExclusionStatus = false">Não</button>

                <button type="button"
                    class="NoticeModal__Btn"
                    v-on:click="deleteAnnotation">Sim</button>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            annotation: {
                type: Object,
                default() {
                    return null;
                },
            },
        },
        data() {
            return {
                editMode: false,
                annotationHeight: '',
                modalExclusionStatus: false,
            };
        },
        watch: {
            editMode(newVal) {
                this.annotationHeight = `${this.$refs.annotationText.offsetHeight}px`;
                this.$emit('EDIT_MODE', this.editMode);

                if (newVal) {
                    this.$refs.annotationTextarea.setAttribute('autofocus', '');
                }
            },
        },
        methods: {
            modalExclusion() {
                this.modalExclusionStatus = true;
            },
            deleteAnnotation() {
                this.editMode = false;
                this.$refs.annotationTextarea.removeAttribute('autofocus');
                this.modalExclusionStatus = false;
                this.$emit('DELETE_ANNOTATION', this.annotation);
            },
            editAnnotation() {
                this.editMode = false;
                this.$refs.annotationTextarea.removeAttribute('autofocus');
                this.$emit('EDIT_ANNOTATION', this.annotation);
            },
            favoriteAnnotation() {
                this.editMode = false;
                this.annotation.favorite = !this.annotation.favorite;
                this.$emit('EDIT_ANNOTATION', this.annotation);
            },
        },
    };
</script>

<style lang="stylus">
    .Annotation
        background-color rgba(65,130,214,1)
        border 1px solid rgba(65,130,214,1)
        overflow hidden
        margin-bottom 10px

    +prefix-classes("Annotation")
        .__Active
            background-color rgba(50,99,163,1)
            border-color rgba(50,99,163,1)

        .__Text
            background-color rgba(255,255,255,1)
            color #333
            float left
            font-size 1.3rem
            min-height 70px
            overflow auto
            line-height 2.2rem
            padding 12px 15px 14px
            width calc(100% - 36px)

            &--big
                @extend .Annotation__Text
                font-size 1.7rem
                line-height 1.9rem

        .__Textarea
            @extend .Annotation__Text
            border none
            resize none

        .__Options
            float right
            height 70px
            padding 5px 0
            width 36px

        .__OptionsBtn
            background-color transparent
            background-size 1.2rem
            background-repeat no-repeat
            background-position center
            border none
            cursor pointer
            height 30px
            width 36px

            &--favorite
                @extend .Annotation__OptionsBtn
                background-image url("../assets/svg/star.svg")

            &--favoriteActive
                @extend .Annotation__OptionsBtn
                background-image url("../assets/svg/starFilled.svg")

            &--edit
                @extend .Annotation__OptionsBtn
                background-image url("../assets/svg/edit.svg")

            &--delete
                @extend .Annotation__OptionsBtn
                background-image url("../assets/svg/x.svg")

            &--check
                @extend .Annotation__OptionsBtn
                background-image url("../assets/svg/check.svg")
</style>
