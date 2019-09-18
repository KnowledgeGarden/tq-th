<template>
  <div id="home">
    <Search />
    <SearchResults />
  </div>
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
  }
</style>
