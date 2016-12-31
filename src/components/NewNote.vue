<template lang="html">
    <div class="NewNote">
        <div class="General__Container">
            <div class="NewNote__Box">
                <textarea name="note"
                    class="NewNote__Field"
                    v-model="annotationText"
                    placeholder="Criar uma nova anotação"></textarea>

                <button type="button"
                    class="NewNote__Btn"
                    v-on:click="saveAnnotation">Criar</button>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                annotationText: '',
                alertText: '',
            };
        },
        methods: {
            saveAnnotation() {
                if (this.annotationText) {
                    this.$emit('SAVE_ANNOTATION', this.annotationText);
                    this.annotationText = '';
                }
            },
        },
    };
</script>

<style lang="stylus">
    .NewNote
        background-color rgba(65,130,214,1)

        & .General__Container
            padding-top 1.458vh
            padding-bottom 1.458vh

    +prefix-classes("NewNote")
        .__Box
            background-color rgba(255,255,255,1)
            height 9.375vh
            min-height 45px

        .__Field
            border none
            height 9.375vh
            min-height 45px
            max-height 9.375vh
            resize none
            padding 2%
            font-size 14px
            width calc(100% - (2.6rem + 4%))

        .__Btn
            background-color transparent
            background-image url("../assets/svg/send.svg")
            background-size 2rem
            background-repeat no-repeat
            background-position center
            border none
            cursor pointer
            float right
            height 9.375vh
            min-height 45px
            max-height 9.375vh
            padding 0 2%
            text-indent -9999px
            width calc(2.3rem + 4%)
</style>
