<template>
  <div class="AppHeader">
    <div class="General__Container AppHeader__Flexbox">
      <div class="AppHeader__Icon--menu AppHeader__FlexboxItem"></div>

      <div class="AppHeader__Title AppHeader__FlexboxItem">
        {{ pageTitle }}
      </div>

      <div class="AppHeader__Icon--bookmarks AppHeader__FlexboxItem"></div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      pageTitle: {
        type: String,
        default() {
          return 'appAnotacoes.com.br';
        },
      },
    },
    data() {
      return {

      };
    },
    computed: {},
    methods: {},
  };
</script>

<style lang="stylus">
  @import "../assets/stylus/mixins"

  .AppHeader
    background-color rgba(50,99,163,1)
    font-family "Open Sans", sans-serif
    text-align center

    & .General__Container
      height 9.375vh
      min-height 45px

  +prefix-classes("AppHeader__")
    .Flexbox
      flex-display()
      flex-direction(row)
      flex-wrap(wrap)
      flex-align-items(center)
      align-content stretch
      -ms-flex-line-pack stretch
      -webkit-align-content stretch
      -ms-flex-pack justify
      justify-content space-between
      -webkit-justify-content space-between

    .FlexboxItem
      flex-order(0)
      flex-item(0 1 auto)
      align-self auto
      -webkit-align-self auto
      -ms-flex-item-align auto

    .Icon
      cursor pointer
      height 1.83rem
      width 1.83rem
      background-size 1.83rem

      &--menu
        @extend .AppHeader__Icon
        background-image: url("../assets/svg/menu.svg");

      &--bookmarks
        @extend .AppHeader__Icon
        background-image: url("../assets/svg/bookmarks.svg");

    .Title
      color #FFF
      font-size 1.34rem
</style>
