<template>
  <b-nav pills>
    <b-nav-item to="/home">Home</b-nav-item>
    <b-nav-item to="/resources">Resources</b-nav-item>
    <b-nav-item to="/users">Users</b-nav-item>
    <b-nav-item to="/tags">Tags</b-nav-item>
  </b-nav>
</template>

<script>

export default {
  name: "Header",
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.searchContainer {
  height: 250px;
}
</style>
