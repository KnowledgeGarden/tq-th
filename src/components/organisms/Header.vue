<template>
  <b-nav id="main--nav" tabs>
    <b-nav-text class="logo-placeholder mx-2">Pivot Browser</b-nav-text>
    <b-nav-item to="/" exact>Home</b-nav-item>
    <b-nav-item to="/resources">Resources</b-nav-item>
    <b-nav-item to="/users">Users</b-nav-item>
    <b-nav-item to="/tags">Tags</b-nav-item>
    <b-nav-item to="/pivot">Pivot</b-nav-item>
  </b-nav>
</template>

<script>

export default {
  name: "Header",
};
</script>

<style lang="scss">
#main--nav {
  background: $header;
  .logo-placeholder {
    font-size: 17px;
    letter-spacing: 4px;
    font-weight: bold;
    color: white;
  }
  .nav-link {
    color: white;
    font-weight: bold;
    &.active {
      color: $text;
    }
  }
}
</style>
