<template>
  <div id="app">
    <v-header></v-header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "styles/bulma/all";
</style>
