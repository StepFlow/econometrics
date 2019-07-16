<template>
  <div class="home">
    <img class="vue-logo" alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  }
}
</script>

<style>
  .home {
    display: flex;
    width: 100%;
    height: calc(100vh - 84px);
    justify-content: center;
  }

  .vue-logo {
    display: block;
    align-self: center;

    animation: spinAround 2s infinite ease-in-out;
  }
</style>
