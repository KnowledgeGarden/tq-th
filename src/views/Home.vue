<template>
  <b-container fluid id="home">
    <Search />
    <SearchResults />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/organisms/Search.vue";
import SearchResults from "@/components/molecules/SearchResults.vue";

export default {
  name: "home",
  components: {
    Search,
    SearchResults,
  }
};
</script>

<style lang="scss">
  #home {
    height: 100%;
    width: 100%;
    padding: 5% 0;
  }
</style>
