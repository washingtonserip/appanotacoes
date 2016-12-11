<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script type="text/babel">
  import AppHeader from './components/AppHeader';

  export default {
    components: {
      AppHeader,
    },
  };
</script>

<style lang="stylus">
  @import "assets/stylus/app"
</style>
