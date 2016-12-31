<template lang="html">
    <div class="Annotation"
        v-bind:class="{ Annotation__Active: editMode }"
        v-show="annotation">
        <textarea class="Annotation__Textarea"
            ref="annotationtextarea"
            v-model="annotation.text"
            v-bind:style="{ height: annotationHeight }"
            v-show="editMode"></textarea>

        <div class="Annotation__Text"
            ref="testeste"
            v-show="!editMode">
            {{ annotation.text }}
        </div>

        <div class="Annotation__Options">
            <button class="Annotation__OptionsBtn--favorite"
                v-show="!editMode"></button>
            <button class="Annotation__OptionsBtn--edit"
                v-show="!editMode"
                v-on:click="editMode = true"></button>

            <button class="Annotation__OptionsBtn--delete"
                v-show="editMode"></button>
            <button class="Annotation__OptionsBtn--check"
                v-show="editMode"
                v-on:click="editMode = false"></button>
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
            };
        },
        watch: {
            editMode() {
                this.annotationHeight = `${this.$refs.testeste.offsetHeight}px`;
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
