<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>

import Header from "@/components/organisms/Header";

export default {
  components: {
    Header
  },
}
</script>
<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
  background: $background;
  .card {
    background: $light-gray;
  }
}
</style>
