<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "styles/bulma/all";
  @import "~@fortawesome/fontawesome-free/scss/fontawesome";

  @include touch {
    html, body {
      font-size: 14px;
    }
  }
</style>
