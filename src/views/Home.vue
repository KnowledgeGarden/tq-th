<template>
  <div id="home">
    <Search />
    <SearchTable />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/organisms/Search.vue";
import SearchTable from "@/components/molecules/SearchTable.vue";

export default {
  name: "home",
  components: {
    Search,
    SearchTable,
  }
};
</script>

<style lang="scss">
  #home {
    height: 100%;
    width: 100%;
  }
</style>
