<template lang="html">
    <div class="NoticeModal"
        v-show="open">
        <div class="NoticeModal__Mask"></div>

        <div class="NoticeModal__Box">
            <div class="NoticeModal__Text">
                Este site é apenas uma demonstração do projeto <a href="https://github.com/washingtonbr/appanotacoes" target="_blank">App Anotações</a> <i>(Versão beta)</i>.
            </div>

            <button type="button"
                class="NoticeModal__Btn"
                v-on:click="closeModal">ok</button>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            open: {
                type: Boolean,
                default() {
                    return false;
                },
            },
        },
        methods: {
            closeModal() {
                this.$emit('CLOSE_MODAL', false);
            },
        },
    };
</script>
